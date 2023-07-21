body {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 5% 10px;
}
.navbar .navbar-logo {
  height: 68px;
  margin-left: 0;
}
.navbar .navbar-logo img {
  width: 211px;
}
.navbar .acceuiletapropos {
  display: flex;
  gap: 80px;
  font-size: 24px;
}
@media screen and (max-width: 1000px) {
  .navbar .navbar-logo {
    display: flex;
    align-items: center;
    width: 40%;
  }
  .navbar .navbar-logo img {
    width: 150px;
  }
  .navbar .acceuiletapropos {
    gap: 30px;
    font-size: 16px;
  }
}

.banner {
  margin: 0 5%;
  margin-bottom: 32px;
}
.banner img {
  width: 100%;
  height: 223px;
  border-radius: 25px;
  object-fit: cover;
  filter: brightness(0.6);
}
.banner .banner-title {
  position: absolute;
  top: 160px;
  text-align: center;
  color: #fff;
  font-weight: 400;
  font-size: 48px;
  font-family: "Montserrat";
  width: 90%;
}
@media screen and (max-width: 1000px) {
  .banner img {
    height: 111px;
    object-position: 50% 30%;
  }
  .banner .banner-title {
    top: 125px;
    left: 10%;
    font-size: 24px;
    width: 217px;
    text-align: start;
  }
}

.logements {
  display: flex;
  height: 775px;
  background-color: #f6f6f6;
  margin: 0 5%;
  padding: 30px 30px;
  border-radius: 25px;
  gap: 0 5%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
}
.logements .title {
  margin: 0 0 10px 10px;
  font-family: "Monsterrat";
  font-size: 18px;
  width: 100px;
}

@media screen and (max-width: 1000px) {
  .logements {
    height: auto;
    background-color: #fff;
    gap: 50px;
    padding: 0;
  }
}
.logement {
  background: linear-gradient(180deg, #ff6060 0%, rgba(0, 0, 0, 0.8) 150%);
  width: 30%;
  height: 340px;
  border-radius: 10px;
  color: #fff;
  display: flex;
  flex-direction: column-reverse;
}
.logement link {
  color: #ff6060;
  text-decoration: none;
}

@media screen and (max-width: 1000px) {
  .logement {
    width: 100%;
    height: 255px;
  }
}
.footer {
  background-color: black;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.footer figure {
  margin: 0 auto;
}
.footer .copyright {
  color: #fff;
  margin: 20px auto 0 auto;
}

/*# sourceMappingURL=style.cs.map */
