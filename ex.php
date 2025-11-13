<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Laundry Promo Ad</title>
</head>
<body style="margin:0; font-family: Arial, Helvetica, sans-serif; background:#fff; color:#1a1a1a;">

  <!-- Wrapper -->
  <div style="max-width:1200px; margin:0 auto; padding:24px;">

    <!-- Two-column layout -->
    <div style="display:flex; gap:24px; align-items:center; justify-content:center; flex-wrap:wrap; position:relative;">

      <!-- Left: Photo area -->
      <div style="flex:1 1 520px; min-width:100px; position:relative; border-radius:14px; overflow:hidden; display:flex; justify-content:center;">
        <img src="clouser3.jpg" alt="Laundry service" style="width:100%; height:auto; object-fit:cover; display:block; border-radius:14px; box-shadow:0 8px 24px rgba(0,0,0,0.2);">

        <!-- Floating instruction card (centered & visible) -->
        <div id="serviceCard" style="
          position:absolute; right:; top:50%; transform:translateY(-50%);
          width:400px; background:#ffffff; border:1px solid #eee; border-radius:16px;
          box-shadow:0 12px 28px rgba(0,0,0,0.2); overflow:hidden; transition:all 0.4s ease;
          z-index:10;
        ">
          <!-- Header -->
          <div style="padding:14px 16px; border-bottom:1px solid #f0f0f0; display:flex; align-items:center; gap:10px;">
            <div style="width:26px; height:26px; border-radius:50%; background:#F4D44C; display:flex; align-items:center; justify-content:center; font-weight:bold; color:#1a1a1a;">!</div>
            <div style="font-weight:700; font-size:14px;">ANY SPECIAL CLEANING INSTRUCTIONS?</div>
          </div>

          <!-- Note -->
          <div id="serviceNote" style="padding:12px 16px; font-size:13px; line-height:1.5; color:#444;">
            <strong>Please handle carefully.</strong> Pink sweater has a delicate embroidery and needs additional care.
          </div>

          <!-- Services -->
          <div style="padding:8px 8px 12px;">
            <!-- Wash & Fold -->
            <div style="display:flex; align-items:center; gap:10px; padding:10px 8px; border-radius:10px; cursor:pointer;"
              onclick="selectService('wash')" id="svc-wash">
              <div style="width:28px; height:28px; border-radius:8px; background:#eaf7ff; display:flex; align-items:center; justify-content:center;">
                <span style="font-size:14px; color:#0660c7;">💧</span>
              </div>
              <div style="flex:1;"><div style="font-weight:700; font-size:13px;">Wash & Fold</div></div>
              <div class="check" style="width:20px; height:20px; border-radius:50%; border:2px solid #ccc;"></div>
            </div>

            <!-- Dry Cleaning -->
            <div style="display:flex; align-items:center; gap:10px; padding:10px 8px; border-radius:10px; cursor:pointer;"
              onclick="selectService('dry')" id="svc-dry">
              <div style="width:28px; height:28px; border-radius:8px; background:#fff5d6; display:flex; align-items:center; justify-content:center;">
                <span style="font-size:14px; color:#b88600;">🧥</span>
              </div>
              <div style="flex:1;"><div style="font-weight:700; font-size:13px;">Dry Cleaning</div></div>
              <div class="check" style="width:20px; height:20px; border-radius:50%; border:2px solid #ccc;"></div>
            </div>

            <!-- Ironing -->
            <div style="display:flex; align-items:center; gap:10px; padding:10px 8px; border-radius:10px; cursor:pointer;"
              onclick="selectService('iron')" id="svc-iron">
              <div style="width:28px; height:28px; border-radius:8px; background:#fff1e8; display:flex; align-items:center; justify-content:center;">
                <span style="font-size:14px; color:#d9480f;">🧺</span>
              </div>
              <div style="flex:1;"><div style="font-weight:700; font-size:13px;">Ironing</div></div>
              <div class="check" style="width:20px; height:20px; border-radius:50%; border:2px solid #ccc;"></div>
            </div>

            <!-- Pickup & Delivery Button -->
            <div style="padding:6px 8px; text-align:center;">
              <button 
                style="
                  background:linear-gradient(90deg, #f7b733, #fc4a1a);
                  border:none;
                  color:#fff;
                  font-weight:700;
                  padding:14px 34px;
                  border-radius:50px;
                  cursor:pointer;
                  font-family:'Poppins',sans-serif;
                  box-shadow:0 6px 15px rgba(0,0,0,0.25);
                  transition:all 0.3s ease;
                  font-size:16px;
                  letter-spacing:0.5px;
                  margin-top:10px;
                "
                onmouseover="this.style.transform='scale(1.08)'; this.style.boxShadow='0 8px 20px rgba(0,0,0,0.3)';"
                onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 6px 15px rgba(0,0,0,0.25)';"
              >
                <i class="fa-solid fa-truck" style="margin-right:10px; color:#fff;"></i>
               View More
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Copy and CTA -->
      <div style="flex:1 1 420px; min-width:280px; display:flex; flex-direction:column; justify-content:center; gap:16px;">
        <div style="padding:24px;">
          <h2 id="mainHeading" style="margin:0 0 10px; font-size:28px; line-height:1.2; color:#1a1a1a;">
            A laundry service designed for you
          </h2>
          <p id="mainText" style="margin:0; font-size:15px; line-height:1.7; color:#1a1a1a;">
            Never worry about the stain on your favourite shirt. We offer laundry, dry cleaning,
            special stain removal, ironing and delivery services in your town at a schedule that fits
            your lifestyle.
          </p>
          <div style="margin-top:14px; font-weight:800; letter-spacing:0.5px; color:#1a1a1a;">
            #FREEDOM <span style="font-weight:400;">from</span> LAUNDRY
          </div>

          <!-- CTAs -->
          <div style="display:flex; gap:10px; margin-top:18px; flex-wrap:wrap;">
            <a href="#book" style="
              display:inline-block; padding:12px 18px; border-radius:10px; text-decoration:none;
              background:#1a1a1a; color:#fff; font-weight:700; font-size:14px; box-shadow:0 8px 18px rgba(0,0,0,0.18);
            ">BOOK NOW</a>

            <button 
              style="
                background:linear-gradient(90deg, #f7b733, #fc4a1a);
                border:none;
                color:#fff;
                font-weight:700;
                padding:14px 34px;
                border-radius:50px;
                cursor:pointer;
                font-family:'Poppins',sans-serif;
                box-shadow:0 6px 15px rgba(0,0,0,0.25);
                transition:all 0.3s ease;
                font-size:16px;
                letter-spacing:0.5px;
              "
              onmouseover="this.style.transform='scale(1.08)'; this.style.boxShadow='0 8px 20px rgba(0,0,0,0.3)';"
              onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 6px 15px rgba(0,0,0,0.25)';"
            >
              <i class="fa-solid fa-truck" style="margin-right:10px; color:#fff;"></i>
              Pickup & Delivery
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    const texts = {
      wash: {
        heading: "Fresh, Clean, Folded — Every Time",
        text: "Our Wash & Fold service ensures your clothes are washed with care, folded neatly, and ready to wear. Perfect for everyday laundry needs."
      },
      dry: {
        heading: "Professional Dry Cleaning",
        text: "Keep your suits, dresses, and delicates spotless with our expert dry cleaning. We handle every piece with precision and care."
      },
      iron: {
        heading: "Crisp & Ready Ironing",
        text: "Enjoy wrinkle-free clothes with our expert ironing service. We ensure every crease is perfect and every outfit looks brand new."
      }
    };

    function selectService(key) {
      const items = {
        wash: document.getElementById('svc-wash'),
        dry: document.getElementById('svc-dry'),
        iron: document.getElementById('svc-iron')
      };

      Object.values(items).forEach(el => {
        el.style.background = '';
        el.style.border = 'none';
        el.querySelector('.check').style.background = '';
        el.querySelector('.check').style.borderColor = '#ccc';
      });

      const selected = items[key];
      selected.style.background = '#F4D44C1A';
      selected.style.border = '1px solid #F4D44C';
      const dot = selected.querySelector('.check');
      dot.style.background = '#b88600';
      dot.style.borderColor = '#b88600';

      document.getElementById('mainHeading').textContent = texts[key].heading;
      document.getElementById('mainText').textContent = texts[key].text;
    }

    window.addEventListener('DOMContentLoaded', () => selectService('wash'));
  </script>

</body>
</html>
