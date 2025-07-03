import styles from "./page.module.scss";

export default function Home() {
  return (
    <div id="main_content">
      <div className={styles.main_visual}>
        <video src="/assets/videos/main_visual.mp4" autoPlay loop muted />
      </div>
    </div>
  );
}
