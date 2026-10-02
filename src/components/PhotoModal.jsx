import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Copy, Check, Hash, FolderKanban, Info, Image as ImageIcon } from 'lucide-react';

/**
 * Fallback image when full size modal image fails
 */
const FALLBACK_MODAL_IMAGE =
  'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22600%22%20height%3D%22600%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20600%20600%22%3E%3Crect%20fill%3D%22%2306281e%22%20width%3D%22600%22%20height%3D%22600%22%2F%3E%3Ccircle%20cx%3D%22300%22%20cy%3D%22260%22%20r%3D%2270%22%20fill%3D%22%23059669%22%2F%3E%3Cpath%20d%3D%22M150%20480%20c50-80%20150-100%20300%200z%22%20fill%3D%22%2334d399%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2292%25%22%20font-size%3D%2222%22%20font-family%3D%22sans-serif%22%20fill%3D%22%23a7d9c6%22%20text-anchor%3D%22middle%22%3EPhoto%20Details%20View%3C%2Ftext%3E%3C%2Fsvg%3E';

/**
 * PhotoModal Component (Lightbox/Details view)
 * Shows full-resolution photo, complete metadata, direct links, and navigation.
 *
 * @param {Object} props
 * @param {Object|null} props.photo - Currently selected photo
 * @param {Function} props.onClose - Modal close handler
 */
const PhotoModal = ({ photo, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [copied, setCopied] = useState(false);

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!photo) return null;

  const { id, albumId, title, url, thumbnailUrl } = photo;
  const formattedTitle = title ? title.charAt(0).toUpperCase() + title.slice(1) : 'Photo Details';

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(url || thumbnailUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-photo-title"
    >
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close photo details"
          title="Close (Esc)"
        >
          <X size={20} />
        </button>

        <div className="modal-body-layout">
          {/* High-Resolution Media Preview */}
          <div className="modal-media-section">
            {!imageLoaded && !imageError && (
              <div className="modal-image-shimmer">
                <ImageIcon size={40} className="modal-shimmer-icon" />
                <span>Loading High-Resolution Photo...</span>
              </div>
            )}
            <img
              src={imageError ? FALLBACK_MODAL_IMAGE : url || thumbnailUrl}
              alt={formattedTitle}
              className={`modal-main-image ${imageLoaded ? 'is-loaded' : 'is-loading'}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                setImageError(true);
                setImageLoaded(true);
              }}
            />
          </div>

          {/* Detailed Metadata & Actions */}
          <div className="modal-info-section">
            <div className="modal-badges-row">
              <span className="modal-badge badge-album">
                <FolderKanban size={13} />
                Album #{albumId}
              </span>
              <span className="modal-badge badge-id">
                <Hash size={13} />
                Photo ID #{id}
              </span>
              <span className="modal-badge badge-res">
                600 × 600 px
              </span>
            </div>

            <h2 id="modal-photo-title" className="modal-photo-title">
              {formattedTitle}
            </h2>

            <div className="modal-meta-card">
              <div className="meta-card-header">
                <Info size={15} />
                <span>Technical Specifications</span>
              </div>
              <div className="meta-grid">
                <div className="meta-item">
                  <span className="meta-label">Photo ID</span>
                  <span className="meta-val font-mono">{id}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Album ID</span>
                  <span className="meta-val font-mono">{albumId}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Data Source</span>
                  <span className="meta-val">JSONPlaceholder</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Fetch Method</span>
                  <span className="meta-val">Native Fetch API</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="modal-actions-group">
              <button
                type="button"
                className={`modal-btn btn-secondary ${copied ? 'is-copied' : ''}`}
                onClick={handleCopyLink}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'URL Copied!' : 'Copy Direct URL'}</span>
              </button>

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-btn btn-primary"
              >
                <span>Open Original</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;
