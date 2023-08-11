document.getElementById("randomButton").addEventListener("click", function () {
    const sifreUzunlugu = parseInt(
      document.getElementById("sifreUzunlugu").value
    );
    const rasgeleSifre = sifreOlustur(sifreUzunlugu);
    document.getElementById("rasgeleSifre").textContent = rasgeleSifre;
  });
  // ********************************************************************
  
  //! ilk olarak  sifreOlustur adlı arrow function ile şifre oluşturma işlevini tanımlıyoruz:
  
  const sifreOlustur = (length) => {
    // Farklı karakter kümelerini tanımlıyoruz
  
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~|}{[]:;?><,./-=";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    let password = "";
  
    // 3 rastgele rakam üretiyoruz
  
    for (let i = 0; i < 3; i++) {
      password += numbers[Math.floor(Math.random() * numbers.length)];
    }
  
    // 2 rastgele sembol üretiyoruz
  
    for (let i = 0; i < 2; i++) {
      password += symbols[Math.floor(Math.random() * symbols.length)];
    }
  
    // 1 rastgele küçük harf ekliyoruz
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
  
    // 1 rastgele büyük harf ekliyoruz
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
  
    // Geri kalan karakterleri oluşturuyoruz
    for (let i = password.length; i < length; i++) {
      const rastgeleKategori = Math.floor(Math.random() * 3); // 0, 1, veya 2
      if (rastgeleKategori === 0) {
        password += numbers[Math.floor(Math.random() * numbers.length)];
      } else if (rastgeleKategori === 1) {
        password += symbols[Math.floor(Math.random() * symbols.length)];
      } else {
        password += lowercase[Math.floor(Math.random() * lowercase.length)];
      }
    }
  
    //!Karakterleri karıştırarak rastgelelik sağlıyoruz.
    //? bu birinci yol
  
    //   password = password
    //     .split("")
    //     .sort(() => Math.random() - 0.5)
    //     .join("");
  
    //?ikinci yol
  
    password = karisikDize(password);
  
    return password;
  };
  
  const karisikDize = (str) => {
    const array = str.split(""); // Şifreyi karakter dizisine dönüştürüyoruz
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Karakterleri yer değiştiriyoruz.
    }
    return array.join(""); // Karakter dizisini tekrar şifre haline dönüştürüyoruz
  };
  
  // Oluşturulan şifreyi döndürüyoruz