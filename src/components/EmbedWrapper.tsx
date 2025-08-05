// components/EmbedWrapper.tsx

// 1. Import the CSS module. "styles" will be an object.
import styles from './EmbedWrapper.module.css';

// Define the "props" that this component will accept
interface EmbedWrapperProps {
  embedUrl: string;
}

const EmbedWrapper = ({ embedUrl }: EmbedWrapperProps) => {
  return (
    // 2. Apply the "container" class from our CSS module
    <div className={styles.container}>
      <iframe
        src={embedUrl}
        title="Embedded Content"
        // 3. Apply the "iframe" class from our CSS module
        className={styles.iframe}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default EmbedWrapper;