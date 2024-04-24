class Kendaraan {
    constructor(merk, warna) {
      this.merk = merk;
      this.warna = warna;
    }
  
    klakson() {
      console.log("Pin! Pin!");
    }
  
    jalankan() {
      console.log(`Kendaraan ${this.merk} warna ${this.warna} sedang berjalan.`);
    }
  }
  
  // Buat objek Mobil sebagai turunan dari class Kendaraan
  class Mobil extends Kendaraan {
    constructor(merk, warna, jumlahPintu) {
      super(merk, warna); // Panggil constructor class induk
      this.jumlahPintu = jumlahPintu;
    }
  
    bukaPintu() {
      console.log(`Membuka pintu mobil ${this.merk} sebanyak ${this.jumlahPintu} pintu.`);
    }
  }
  
  // Buat objek instance dari class Mobil
  const mobilku = new Mobil("Toyota", "Merah", 4);
  
  mobilku.jalankan(); // Output: Kendaraan Toyota warna Merah sedang berjalan.
  mobilku.klakson();   // Output: Pin! Pin!
  mobilku.bukaPintu(); // Output: Membuka pintu mobil Toyota sebanyak 4 pintu.
  