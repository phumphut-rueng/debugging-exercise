import { useState } from "react";

export default function UsernameForm() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setUsername(value);
    if (value.trim().length < 3) {
      setError("Username ต้องมีอย่างน้อย 3 ตัวอักษร");
    } else {
      setError("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (username.trim().length < 3) {
      setError("Username ต้องมีอย่างน้อย 3 ตัวอักษร");
      return;
    }
    alert(`Submitted: ${username}`);

    setUsername("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          value={username}
          onChange={handleChange}
          placeholder="Enter username"
        />
      </label>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div>
      <button type="submit" disabled={!!error}>Submit</button>
      </div>
    </form>
  );
}
