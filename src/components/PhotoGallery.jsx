import React, { useState, useEffect } from 'react';
import PhotoCard from './PhotoCard';
import PhotoModal from './PhotoModal';
import {
  Filter,
  ArrowUpDown,
  RefreshCw,
  Search,
  Sparkles,
  AlertCircle,
  FolderOpen,
  SlidersHorizontal,
} from 'lucide-react';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/photos';

/**
 * PhotoGallery Component
 * Fetches the first 100 photos from JSONPlaceholder using native fetch(),
 * manages states with useState & useEffect, and renders photos using map()
 * and the PhotoCard component.
 *
 * @param {Object} props
 * @param {string} props.searchQuery - External search query from Header
 * @param {Function} props.onSearchChange - Function to update search query
 * @param {Function} props.onCountChange - Reports (total, filtered) to parent for Header sync
 */
const PhotoGallery = ({ searchQuery = '', onSearchChange, onCountChange }) => {
  // Required State Hooks
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Bonus Features: Filter, Sort & Modal States
  const [selectedAlbum, setSelectedAlbum] = useState('all');
  const [sortOrder, setSortOrder] = useState('id-asc'); // 'id-asc' | 'id-desc' | 'title-asc'
  const [activePhoto, setActivePhoto] = useState(null);

  // Fetch photos on component mount using native fetch()
  const fetchPhotos = async () => {
    setLoading(true);
    setError(null);

    try {
      // NOTE: Using native fetch() as strictly requested (No Axios)
      const response = await fetch(API_ENDPOINT);

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status} (${response.statusText})`);
      }

      const data = await response.json();

      // Requirement: Display the first 100 photos
      const first100Photos = data.slice(0, 100);
      setPhotos(first100Photos);
    } catch (err) {
      console.error('Failed to fetch photos:', err);
      setError(err.message || 'Unable to load photos. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  // Compute available unique albums from loaded photos (e.g., Album 1, Album 2)
  const availableAlbums = Array.from(new Set(photos.map((p) => p.albumId))).sort(
    (a, b) => a - b
  );

  // Filter & Search Logic
  const filteredPhotos = photos
    .filter((photo) => {
      // Filter by Album ID
      if (selectedAlbum !== 'all' && photo.albumId !== Number(selectedAlbum)) {
        return false;
      }

      // Filter by Search Query (searches both title and ID)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = photo.title.toLowerCase().includes(query);
        const matchesId = photo.id.toString() === query || `#${photo.id}` === query;
        const matchesAlbum = `album ${photo.albumId}`.includes(query);
        return matchesTitle || matchesId || matchesAlbum;
      }

      return true;
    })
    .sort((a, b) => {
      if (sortOrder === 'id-asc') return a.id - b.id;
      if (sortOrder === 'id-desc') return b.id - a.id;
      if (sortOrder === 'title-asc') return a.title.localeCompare(b.title);
      return 0;
    });

  // Notify parent of count updates for Header display
  useEffect(() => {
    if (onCountChange) {
      onCountChange(photos.length, filteredPhotos.length);
    }
  }, [photos.length, filteredPhotos.length, onCountChange]);

  const handleResetFilters = () => {
    setSelectedAlbum('all');
    setSortOrder('id-asc');
    if (onSearchChange) {
      onSearchChange('');
    }
  };

  return (
    <section className="gallery-section" id="photo-gallery">
      <div className="gallery-container">
        {/* Gallery Hero Banner / Introduction */}
        <div className="gallery-hero">
          <div className="hero-pill">
            <Sparkles size={14} className="hero-pill-icon" />
            <span>Showcase &bull; Module 15 Assignment</span>
          </div>
          <h2 className="gallery-hero-title">
            Explore Curated <span className="gradient-text">Photo Collection</span>
          </h2>
          <p className="gallery-hero-desc">
            Displaying the first 100 high-definition photos fetched in real time from
            JSONPlaceholder API using React hooks (<code>useState</code> &amp; <code>useEffect</code>).
          </p>
        </div>

        {/* Gallery Controls Bar: Filter pills, Sorting & Count */}
        <div className="gallery-controls-card">
          <div className="controls-row">
            {/* Album Filter Buttons */}
            <div className="filter-group">
              <span className="filter-label">
                <Filter size={15} />
                <span>Albums:</span>
              </span>
              <div className="filter-pills" role="radiogroup" aria-label="Filter by album">
                <button
                  type="button"
                  className={`filter-pill ${selectedAlbum === 'all' ? 'is-active' : ''}`}
                  onClick={() => setSelectedAlbum('all')}
                >
                  All ({photos.length})
                </button>
                {availableAlbums.map((albumId) => {
                  const albumCount = photos.filter((p) => p.albumId === albumId).length;
                  return (
                    <button
                      key={albumId}
                      type="button"
                      className={`filter-pill ${selectedAlbum === String(albumId) ? 'is-active' : ''}`}
                      onClick={() => setSelectedAlbum(String(albumId))}
                    >
                      Album {albumId} ({albumCount})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sort Order & Action Controls */}
            <div className="sort-action-group">
              <div className="sort-wrapper">
                <ArrowUpDown size={15} className="sort-icon" />
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="sort-select"
                  aria-label="Sort photos"
                >
                  <option value="id-asc">Sort: ID (1 &rarr; 100)</option>
                  <option value="id-desc">Sort: ID (100 &rarr; 1)</option>
                  <option value="title-asc">Sort: Title (A &rarr; Z)</option>
                </select>
              </div>

              {(selectedAlbum !== 'all' || searchQuery !== '' || sortOrder !== 'id-asc') && (
                <button
                  type="button"
                  className="reset-filters-btn"
                  onClick={handleResetFilters}
                  title="Reset all filters"
                >
                  <RefreshCw size={13} />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Results Summary Bar */}
          <div className="gallery-results-meta">
            <span className="results-count">
              Showing <strong>{filteredPhotos.length}</strong> of <strong>{photos.length}</strong> photos
              {selectedAlbum !== 'all' && ` in Album ${selectedAlbum}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </span>
          </div>
        </div>

        {/* ================================================================
            Loading State: Modern Skeleton Card Grid
            ================================================================ */}
        {loading && (
          <div className="photos-grid skeleton-grid" aria-busy="true" aria-label="Loading photos">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="skeleton-card">
                <div className="skeleton-media"></div>
                <div className="skeleton-body">
                  <div className="skeleton-line title-line-1"></div>
                  <div className="skeleton-line title-line-2"></div>
                  <div className="skeleton-meta">
                    <div className="skeleton-chip"></div>
                    <div className="skeleton-chip"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================================================================
            Error State: User-friendly error message & Retry button
            ================================================================ */}
        {!loading && error && (
          <div className="gallery-state-box error-box">
            <div className="state-icon-wrapper error-icon">
              <AlertCircle size={36} />
            </div>
            <h3 className="state-title">Failed to Load Photos</h3>
            <p className="state-desc">{error}</p>
            <button
              type="button"
              className="retry-btn"
              onClick={fetchPhotos}
            >
              <RefreshCw size={16} />
              <span>Retry Fetching Photos</span>
            </button>
          </div>
        )}

        {/* ================================================================
            Empty Search / Filter State
            ================================================================ */}
        {!loading && !error && filteredPhotos.length === 0 && (
          <div className="gallery-state-box empty-box">
            <div className="state-icon-wrapper empty-icon">
              <FolderOpen size={36} />
            </div>
            <h3 className="state-title">No Photos Found</h3>
            <p className="state-desc">
              No photos match your current search &ldquo;{searchQuery}&rdquo;
              {selectedAlbum !== 'all' && ` or Album ${selectedAlbum}`}.
            </p>
            <button
              type="button"
              className="retry-btn"
              onClick={handleResetFilters}
            >
              <RefreshCw size={15} />
              <span>Clear Filters &amp; Show All</span>
            </button>
          </div>
        )}

        {/* ================================================================
            Main Photo Display: map() over the photos array and render PhotoCard
            ================================================================ */}
        {!loading && !error && filteredPhotos.length > 0 && (
          <div className="photos-grid" id="photos-grid">
            {filteredPhotos.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                onViewDetails={(selected) => setActivePhoto(selected)}
              />
            ))}
          </div>
        )}
      </div>

      {/* View Details Lightbox Modal */}
      {activePhoto && (
        <PhotoModal
          photo={activePhoto}
          onClose={() => setActivePhoto(null)}
        />
      )}
    </section>
  );
};

export default PhotoGallery;
