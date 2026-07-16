import UserSearch from "./assets/UserSearch";

const App = () => {
  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center py-5"
      style={{
        background: "linear-gradient(135deg, #66ddea 0%, #00424e 100%)",
      }}
    >
      <UserSearch />
    </div>
  );
};

export default App;