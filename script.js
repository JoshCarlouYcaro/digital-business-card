// Mga personal na detalye mo kasama ang iyong bagong phone number
const contactInfo = {
    name: "Josh Ycaro",
    phone: "+639292096887",
    email: "joshycarovlogs@gmail.com",
    title: "UI/UX Designer & Developer"
};

document.getElementById('saveContactBtn').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Gumawa ng vCard format data string
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
TEL;TYPE=CELL:${contactInfo.phone}
EMAIL:${contactInfo.email}
TITLE:${contactInfo.title}
END:VCARD`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        // Para sa mobile: gagamit ng data URI para diretso sa contact app/phonebook
        const encodedVCard = encodeURIComponent(vcardData);
        window.location.href = `data:text/vcard;charset=utf-8,${encodedVCard}`;
    } else {
        // Para sa PC/Desktop: gagamit ng vCard file download fallback
        const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${contactInfo.name.replace(/\s+/g, '_')}.vcf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }
});

document.getElementById('emailLink').addEventListener('click', function(e) {
    e.preventDefault();
    
    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=joshycarovlogs@gmail.com";
    window.location.href = "mailto:joshycarovlogs@gmail.com";
    
    setTimeout(function() {
        window.open(gmailUrl, '_blank');
    }, 500);
});