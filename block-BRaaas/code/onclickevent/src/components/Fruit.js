function handleClick(name) {
  return alert(`Hello ${name.value}`);
}

function Fruit() {
  let fruits = [
      { id: 'apple', value: '🍎 apple' },
      { id: 'orange', value: '🍊 orange' },
      { id: 'grape', value: '🍇 grape' },
      { id: 'pear', value: '🍐 pear' },
  ];
  return (
      <>
          <section className="section">
              <div>
                  {fruits.map((elm) => {
                      return (
                          <button
                              className="btn"
                              key={elm.id}
                              onClick={() => handleClick(elm)}>
                              {elm.value}
                          </button>
                      );
                  })}
              </div>
          </section>
      </>
  )
}

export default Fruit;