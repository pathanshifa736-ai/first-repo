<?php
// ex.php
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SparQlean Testimonials</title>

<!-- Owl Carousel CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"/>

<style>
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
}

.section-title {
    text-align: center;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 40px;
    color: #222;
}

.social-proof-slider-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 10px;
}

.testimonial-card {
    background: linear-gradient(145deg,#fdfbfb,#ebedee);
    border-radius: 18px;
    padding: 20px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.1);
    transition: all 0.35s ease;
    cursor: pointer;
    text-align: center;
}

.testimonial-card:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 12px 30px rgba(0,0,0,0.15);
}

.testimonial-card img {
    height: 28px;
    width: 28px;
}

.testimonial-text {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #333;
    margin-bottom: 12px;
}

.customer-name {
    font-weight: 600;
    font-size: 15px;
    color: #222;
    margin: 0;
}

.customer-rating {
    font-size: 18px;
    color: #ffd700;
    letter-spacing: 1px;
    margin-bottom: 8px;
}

.owl-dots { display: none; }
</style>
</head>
<body>

<section class="section section--vert-padding-large">
    <h2 class="section-title">What our customers have to say</h2>

    <div class="social-proof-slider-wrapper">
        <div class="owl-carousel owl-theme">

            <?php
            $reviews = [
                ["text"=>"Great discount and perfect service. Clothes came spotless and fragrant.","name"=>"Customer 1","bg"=>"#fdfbfb"],
                ["text"=>"SparQlean is amazing! Quick turnaround and professional staff.","name"=>"Customer 2","bg"=>"#e0f7fa"],
                ["text"=>"My go-to dry cleaning service. Clothes perfectly clean and pressed.","name"=>"Customer 3","bg"=>"#fce4ec"],
                ["text"=>"Very professional. Stains removed and clothes smell fresh.","name"=>"Customer 4","bg"=>"#fffde7"],
                ["text"=>"Affordable and fast. My clothes always return perfectly folded.","name"=>"Customer 5","bg"=>"#f0f4c3"],
                ["text"=>"Excellent service! Timely pickup and delivery. Highly recommend.","name"=>"Customer 6","bg"=>"#e1f5fe"],
                ["text"=>"Impressed with attention to detail. Clothes returned crisp and clean.","name"=>"Customer 7","bg"=>"#f8bbd0"],
                ["text"=>"Friendly staff and great quality service. My wardrobe feels refreshed!","name"=>"Customer 8","bg"=>"#fff9c4"]
            ];

            foreach($reviews as $r) {
                echo '<div class="testimonial-card" style="background:'.$r['bg'].';">
                        <div style="margin-bottom:10px;">
                            <div style="background:#fff;border-radius:50%;padding:6px; display:inline-block;">
                                <img src="https://static-prod.rinse.com/assets/rebrand/img/icons/google.sha256-badb1a66d5.svg" alt="Google logo">
                            </div>
                        </div>
                        <p class="testimonial-text">“'.$r['text'].'”</p>
                        <p class="customer-name">– '.$r['name'].'</p>
                        <div class="customer-rating">★★★★★</div>
                      </div>';
            }
            ?>

        </div>
    </div>
</section>

<!-- jQuery & Owl Carousel JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>

<script>
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2000,  // 2s for fast sliding
        autoplayHoverPause: true,
        smartSpeed: 600,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });
});
</script>

</body>
</html>
