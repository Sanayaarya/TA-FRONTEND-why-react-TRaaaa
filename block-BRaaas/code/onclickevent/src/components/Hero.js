

function handleClick() {
  return alert('Hello React Event');
}

function Hero() {
  return (
      <>
          <section className="section">
              <button
                  className="btn"
                  onClick={() => handleClick()}>
                  Click me
              </button>
          </section>
      </>
  );
}

export default Hero;