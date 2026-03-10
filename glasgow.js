$(document).ready(function () {
      function revealSections() {
        $(".section-card").each(function () {
          const sectionTop = $(this).offset().top;
          const scrollTop = $(window).scrollTop();
          const windowHeight = $(window).height();

          if (scrollTop + windowHeight - 80 > sectionTop) {
            $(this).addClass("show");
          }
        });
      }

      function updateActiveLink() {
        const allLinks = $(".top-links a");
        const sections = $("article.section-card");
        let currentId = "";

        sections.each(function () {
          const sectionTop = $(this).offset().top - 120;

          if ($(window).scrollTop() >= sectionTop) {
            currentId = $(this).attr("id");
          }
        });

        allLinks.removeClass("active");

        if (currentId) {
          $('.top-links a[href="#' + currentId + '"]').addClass("active");
        }
      }

      revealSections();
      updateActiveLink();

      $(window).on("scroll", function () {
        revealSections();
        updateActiveLink();

        if ($(this).scrollTop() > 300) {
          $("#backToTop").fadeIn();
        } else {
          $("#backToTop").fadeOut();
        }
      });

      $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();
        const target = $(this.getAttribute("href"));

        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 80,
            },
            700
          );
        }
      });

      $("#backToTop").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 700);
      });

      $(".info-box").hover(
        function () {
          $(this).stop().animate({ marginTop: "-4px" }, 180);
        },
        function () {
          $(this).stop().animate({ marginTop: "0px" }, 180);
        }
      );
    });