<template>
  <div class="contact-container main-container">
    <div class="contact">
      <div class="feedback">
        <img src="@/assets/review.png" />

        <h1>Request Features & Give Feedback</h1>
        <p>
          Help improve BusinessRate by suggesting new features, modifications,
          or providing feedback
        </p>
        <button class="feedbackButton">Give Feedback</button>
      </div>
      <div class="question">
        <img src="@/assets/mail.png" />

        <h1>Have a specific question?</h1>
        <p>
          Do you have a specific question or just want to get ahold of a
          BusinessRate Representative? Drop us a line.
        </p>
        <button class="feedbackButton">Contact Us</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.contact-container.main-container {
  background-color: #eff0f0;
  padding: 10vw 5vw;
  font-family: "Playfair Display", serif;
}

.feedback h1,
.contact h1 {
  color: #6f6f6f;
  font-size: 6vw;
  height: 10%;
  margin-bottom: 5vw;
}

.feedbackButton {
  box-shadow: 0px 1px 0px 0px #fff6af;
  border-radius: 20px;
  border: 1px solid #ffaa22;
  display: inline-block;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 40px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffee66;
}

.feedbackButton:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.feedbackButton:active {
  position: relative;
}

.feedback {
  margin-bottom: 20vw;
}

.feedback p,
.question p {
  color: #8a8585;
  font-size: 5vw;
  margin: 0 0 20px;
  height: 25%;
}

.feedback img,
.question img {
  width: 80%;
  height: 50%;
  margin: auto auto 40px;
}

@media screen and (min-width: 640px) {
  .contact {
    display: flex;
    justify-content: space-between;
  }

  .contact-container.main-container {
    padding: 10vw 5vw 15vw;
  }

  .feedback h1,
  .question h1 {
    font-size: 3.2vw;
  }

  .feedback {
    margin-bottom: 0vw;
  }

  .feedback,
  .question {
    width: 48%;
  }

  .feedback p,
  .question p {
    font-size: 2.5vw;
    height: 17%;
  }

  .feedback img,
  .question img {
    width: 70%;
  }
}

@media screen and (min-width: 999px) {
  .feedback img,
  .question img {
    width: 60%;
  }
  .feedback,
  .question {
    width: 45%;
  }
  .feedback h1,
  .question h1 {
    font-size: 2.5vw;
    height: 3%;
  }
  .feedback p,
  .question p {
    font-size: 2vw;
    margin: 0 0 30px;
  }
}

@media screen and (min-width: 1200px) {
      .feedback img,
  .question img {
    width: 50%;
  }

  .contact-container.main-container {
    padding: 5vw;
  }
  .feedback h1,
  .question h1 {
    font-size: 2vw;
    margin-bottom: 3vw;
  }

    .contact {
    justify-content: space-around;
  }

    .feedback,
  .question {
    width: 40%;
  }

  .feedback p,
  .question p {
    font-size: 1.5vw;
        margin: 0 0 20px;
  }

}

@media screen and (min-width: 1395px) {
      .feedback img,
  .question img {
    width: 45%;
  }

  .feedback h1,
  .question h1 {
    font-size: 1.6vw;
    margin-bottom: 2.5vw;
  }

  .feedback p,
  .question p {
    font-size: 1.2vw;
        margin: 0 0 20px;
  }

}
</style>
