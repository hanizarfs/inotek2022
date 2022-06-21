import React from 'react';

const styles = {
    container__about: {
        display: "flex",
        height: "100vh",
        width: "86%",
        maxWidth: "1440px",
        margin: "auto"
    },
    item: {
        width: "50%"
    },
    img: {
        width: "100%"
    }
  };
  

const Wisata = () => {
  return (
    <main className="main">
        <section className='hero'>
        <h1>HERO</h1>
    </section>
    <section className="about">
        <div className="container__about" style={styles.container__about}>
            <div className="img__about" style={styles.item}>
                <img src={require('../assets/images/wisata/login.jpg')} alt="Panglipuran Village" style={styles.img} />
                <h1>IMG ABOUT</h1>
            </div>
            <div className="content__about" style={styles.item}>
                <header className="header__content__about">
                    <h1>The Beauty of Pangliouran Tourism Village</h1>
                </header>
                <main className="main__content__about">
                    <p>
                    Penglipuran Village is located in Bangli Regency, Bali Province with a very strategic location. Currently it is known as the Traditional Village, where in accordance with the designation, tourists who visit this unique village will find some very interesting objects. 
                    </p>
                    <p>
                    Some very special buildings found in Penglipuran Village, buildings with this ancient or classic category are Angkul-angkul or in Indonesian called the gate, which is made similarly between one gate and another gate.
                    </p>
                </main>
            </div>
        </div>
    </section>
    </main>

  )
}

export default Wisata;