function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Hello, Irja!</h1>
      <h2>
        The date is {currDate.toLocaleDateString()} and the time now is{" "}
        {currDate.toLocaleTimeString()}.
      </h2>
      <p>This is a new paragraph.</p>
    </div>
  );
}

export default App;
