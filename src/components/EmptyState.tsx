import styles from "./EmptyState.module.scss";

type EmptyStateProps = {
  tagline: string;
  description: string;
  children: React.ReactNode;
  image: JSX.Element;
};

export default function EmptyState({
  tagline,
  description,
  children,
  image,
}: EmptyStateProps) {
  return (
    <div className={styles.state}>
      {image}
      <header>
        <h1 className="text-xxxl">{tagline}</h1>
        <p>
          <small>{description}</small>
        </p>
      </header>
      <div>{children}</div>
    </div>
  );
}
