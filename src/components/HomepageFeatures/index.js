import styles from "./styles.module.css";

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <img src="./img/dashboard/dashboard-intro.png" />
          <div style={{ marginTop: 16 }}>
            <img src="./img/device/device-intro.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
