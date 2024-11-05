function PageNotFound() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <img
        src="https://images.unsplash.com/photo-1584824486516-0555a07fc511?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        width={"700px"}
        height={""}
      />
      <a className="mt-5" href="/">--- Back to Home ---</a>
    </div>
  );
}

export default PageNotFound;
