
document.addEventListener('DOMContentLoaded', () => {
    // ১. মাউস ট্র্যাকিং গ্লো ইফেক্ট (Cybersecurity Vibes)
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        document.body.style.background = `radial-gradient(circle at ${x}% ${y}%, #111827 0%, #050810 50%)`;
    });

    // ২. ইন্টারসেকশন অবজারভার (স্মুথ এন্ট্রেন্স)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .card').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all 0.8s cubic-bezier(0.2, 1, 0.2, 1)";
        observer.observe(el);
    });

    // ৩. কাস্টম কনসোল মেসেজ (ডেভেলপারদের জন্য সারপ্রাইজ)
    console.log("%c Hello Abdullah! %c Your portfolio is now running on Master-Engine.", 
                "color: #00d2ff; font-size: 20px; font-weight: bold;", 
                "color: #fff; font-size: 14px;");
});

