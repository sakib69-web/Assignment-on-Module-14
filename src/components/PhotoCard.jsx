import React, { useState } from 'react';
import { Eye, Copy, Check, Hash, FolderKanban, Image as ImageIcon } from 'lucide-react';

/**
 * Fallback SVG Data URI in case an external image fails to load or network is slow.
 */
const FALLBACK_IMAGE =
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22600%22%20height%3D%22600%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20600%20600%22%3E%3Crect%20fill%3D%22%236366f1%22%20width%3D%22600%22%20height%3D%22600%22%2F%3E%3Cpath%20d%3D%22M150%20420%20l90-110%2060%2070%20110-140%20140%20180z%22%20fill%3D%22rgba(255%2C255%2C255%2C0.3)%22%2F%3E%3Ccircle%20cx%3D%22230%22%20cy%3D%22230%22%20r%3D%2240%22%20fill%3D%22rgba(255%2C255%2C255%2C0.6)%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2285%25%22%20font-size%3D%2224%22%20font-family%3D%22sans-serif%22%20fill%3D%22%23ffffff%22%20text-anchor%3D%22middle%22%3EPhoto%20Preview%3C%2Ftext%3E%3C%2Fsvg%3E';

/**
 * PhotoCard Component
 * Renders an individual photo card with Photo, ID, Album ID, Title, and interactive triggers.
 *
 * @param {Object} props
 * @param {Object} props.photo - Photo data object { id, albumId, title, url, thumbnailUrl }
 * @param {Function} props.onViewDetails - Handler called when user clicks card or view details
 */
const PhotoCard = ({ photo, onViewDetails }) => {
  const { id, albumId, title, url, thumbnailUrl } = photo;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [copied, setCopied] = useState(false);

  // Capitalize the first letter of the title for clean editorial typography
  const formattedTitle = title ? title.charAt(0).toUpperCase() + title.slice(1) : 'Untitled Photo';

  const handleCopyUrl = (e) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(url || thumbnailUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCardClick = () => {
    if (onViewDetails) {
      onViewDetails(photo);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <article
      className="photo-card"
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Photo ID ${id}: ${formattedTitle}`}
    >
      {/* Photo Image Container */}
      <div className="card-media-wrapper">
        {/* Shimmer Placeholder while loading */}
        {!imageLoaded && !imageError && (
          <div className="media-shimmer" aria-hidden="true">
            <ImageIcon size={28} className="shimmer-icon" />
          </div>
        )}

        <img
          src={imageError ? FALLBACK_IMAGE : thumbnailUrl || url}
          alt={formattedTitle}
          loading="lazy"
          className={`card-image ${imageLoaded ? 'is-loaded' : 'is-loading'}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(true);
          }}
        />

        {/* Floating Badges: Album ID & Photo ID */}
        <div className="card-floating-badges">
          <span className="card-badge badge-album" title={`Belongs to Album ${albumId}`}>
            <FolderKanban size={11} /> Album {albumId}
          </span>
          <span className="card-badge badge-id" title={`Photo ID #${id}`}>
            <Hash size={11} /> #{id}
          </span>
        </div>

        {/* Hover Quick Overlay Action */}
        <div className="card-hover-overlay">
          <button
            type="button"
            className="overlay-action-btn view-btn"
            onClick={handleCardClick}
            title="View Details"
          >
            <Eye size={16} />
            <span>View Details</span>
          </button>
        </div>
      </div>

      {/* Card Content: Title, ID Metadata & Copy Action */}
      <div className="card-content">
        <h3 className="card-title" title={formattedTitle}>
          {formattedTitle}
        </h3>

        <div className="card-footer-info">
          <div className="meta-chips">
            <span className="meta-chip">
              <span className="chip-dot"></span>
              ID: <strong>{id}</strong>
            </span>
            <span className="meta-chip">
              Album: <strong>{albumId}</strong>
            </span>
          </div>

          <button
            type="button"
            className={`card-icon-action ${copied ? 'is-copied' : ''}`}
            onClick={handleCopyUrl}
            title={copied ? 'URL Copied!' : 'Copy Photo URL'}
            aria-label="Copy photo URL to clipboard"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span className="copy-tooltip">{copied ? 'Copied!' : 'Copy URL'}</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default PhotoCard;
