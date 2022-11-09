

function handleClick(name) {
  return alert(`Hello ${name}`);
}

function Greet() {
  let arr = ['Arya', 'John', 'Bran'];
  return (
    <>
      <section className="section">
        <div>
          {arr.map((elm, i) => {
            return (
              <button
                className="btn"
                key={i} 
                onClick={() => handleClick(elm)}>
                {elm}
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}


export default Greet;