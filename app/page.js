"use client";
import { useState } from "react";
import styles from "../styles/Calculator.module.css";

export default function Page() {
  const [activeTab, setActiveTab] = useState("Metric Units");
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(65);
  const [activity, setActivity] = useState("1.55");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    let BMR;
    if (gender === "male") {
      BMR = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      BMR = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
    }
    const calories = Math.round(BMR * parseFloat(activity));
    setResult(calories);
  };

  const handleClear = () => {
    setAge(25);
    setGender("male");
    setHeight(180);
    setWeight(65);
    setActivity("1.55");
    setResult(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <h2>Calorie Calculator</h2>
        <p>
          The <b>Calorie Calculator</b> can be used to estimate the number of
          calories a person needs to consume each day. This calculator can also
          provide some simple guidelines for gaining or losing weight.
        </p>

        {/* Tabs */}
        <div className={styles.tabs}>
          {["US Units", "Metric Units", "Other Units"].map((tab) => (
            <div
              key={tab}
              className={`${styles.tab} ${
                activeTab === tab ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Form */}
        <div className={styles.formGroup}>
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />{" "}
          ages 15 - 80
        </div>

        <div className={styles.formGroup}>
          <label>Gender</label>
          <div className={styles.genderOptions}>
            <label>
              <input
                type="radio"
                name="gender"
                checked={gender === "male"}
                onChange={() => setGender("male")}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                checked={gender === "female"}
                onChange={() => setGender("female")}
              />{" "}
              Female
            </label>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Height</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />{" "}
          cm
        </div>

        <div className={styles.formGroup}>
          <label>Weight</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />{" "}
          kg
        </div>

        <div className={styles.formGroup}>
          <label>Activity</label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          >
            <option value="1.375">Light: exercise 1-3 times/week</option>
            <option value="1.55">Moderate: exercise 4-5 times/week</option>
            <option value="1.725">Intense: exercise 6-7 times/week</option>
          </select>
        </div>

        <div className={styles.settings}>+ Settings</div>

        <div className={styles.buttons}>
          <button
            className={`${styles.btn} ${styles.btnGreen}`}
            onClick={handleCalculate}
          >
            Calculate
          </button>
          <button
            className={`${styles.btn} ${styles.btnGray}`}
            onClick={handleClear}
          >
            Clear
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className={styles.result}>
            <h3>Your daily calories: {result} kcal</h3>
          </div>
        )}
      </div>
    </div>
  );
}
