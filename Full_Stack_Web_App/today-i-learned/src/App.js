import "./style.css";

function App() {
  const appTitle = `Today I Learned`;

  return (
    <>
      {/*  HEADER (this will later become a component)*/}
      <header className="header">
        <div className="logo">
          <img
            src="logo.png"
            height="68"
            width="68"
            alt="Today I Learned Logo"
          />
          <h1>{appTitle}</h1>
        </div>
        <button className="btn btn-large btn-open">Share a fact</button>
      </header>
      <NewFactForm />
      <main class="main">
        <CategoryFilters />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form">Fact Form</form>;
}

function CategoryFilters() {
  return <aside>Category Filter</aside>;
}

function FactList() {
  return <section>Facts List</section>;
}
export default App;
