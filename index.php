<?php include 'header.php' ?>
  <body>
    <div id="fb-root"></div>

    <nav class="index-nav">
        <a href="index.php"><img src="img/logo-white.png" width="350" alt=""></a>
        <ul class="text-right float-right">
          <li><a href="index.php">Home</a></li>
          <li><a href="projects.php">Projects</a></li>
          <li><a href="events.php">Events</a></li>
          <li><a href="team.php">Team</a></li>
          <li><a href="join.php">Join</a></li>
          <li><a href="contact.php">Non Profits</a></li>
          <li><a href="about.php">About</a></li>
        </ul>
    </nav>
    <div class="header-wrap">
    <header class="section-hero-1 slider--js">
      <div class="">

        <div class="hero-text-container">
          <span class="section-hero-1-text">
            <h1>Join Us</h1>
            <p>	Be a part of the team that makes it happen</p>
            <a href="#"><button  class="hero-button" type="button" name="button">Join Us</button></a>
          </span>
          <span class="section-hero-2-text">
            <h1>Officer applications</h1>
            <p>Become a leader in the organization</p>
            <a href="#"><button  class="hero-button" type="button" name="button">Apply</button></a>
          </span>
          <span class="section-hero-3-text">
            <h1>Projects</h1>
            <p>See how we have given back to the community</p>
            <a href="#"><button class="hero-button"  type="button" name="button">Our Work</button></a>
          </span>
        </div>
        <div class="slider-buttons">
        </div>
      </div>
    </header>
    </div>
    <main>



      <section>
        <div class="row">
          <div class="large-12 large-centered text-center">
            <h1>We are Coding for Good. </h1>
            <h4>We are a dedicated and passionate team of developers committed to creating websites free of charge for local non-profits </h4>
          </div>
        </div>
        <h1></h1>
      </section>
      <section class="section-gray section-students">
        <div class="row">
          <div class="large-5 columns">
            <h1>Students:</h1>
            <p>Our organization follows a hierarchy similar to the real world. Led by officers, we implement the scrum methodology to consistently ship quality software. Developers are put into teams and work with managers and designers to create meaningful and beautiful websites. </p>
            <a href="join.php"><button type="button" class="primary-button" name="button">Join Us</button></a>
          </div>
          <div class="large-5 columns index-pic">
            <img src="img/students.jpg" alt="">
          </div>
        </div>
      </section>
      <section class="section-nonprofits">
        <div class="row">
          <div class="large-5 columns index-pic">
            <img src="img/nonprofits.jpg" alt="">
          </div>
          <div class="large-5 columns" style="padding: 15px">
            <h1>Nonprofits:</h1>
            <p>We want to use our skills to make a difference. We believe that volunteering strengthens our community and we want a chance to give back. We want to work with your organization to provide complimentary tech consulting </p>
            <a href="contact.php"><button type="button" class="primary-button" name="button">Contact Us</button></a>
          </div>
        </div>
      </section>
      <?php include'footer.php' ?>
