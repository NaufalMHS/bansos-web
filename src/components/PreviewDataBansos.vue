<template>
  <div class="preview-container">
    <h2>Preview Data Bantuan Sosial</h2>
    <table>
      <thead>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nama</td>
          <td>{{ formData.nama }}</td>
        </tr>
        <tr>
          <td>NIK</td>
          <td>{{ formData.nik }}</td>
        </tr>
        <tr>
          <td>Nomor Kartu Keluarga</td>
          <td>{{ formData.noKartuKeluarga }}</td>
        </tr>
        <tr>
          <td>Foto KTP</td>
          <td>
            <img v-if="formData.fotoKTP" :src="formData.fotoKTP" alt="Foto KTP" class="preview-image" />
          </td>
        </tr>
        <tr>
          <td>Foto Kartu Keluarga</td>
          <td>
            <img v-if="formData.fotoKK" :src="formData.fotoKK" alt="Foto Kartu Keluarga" class="preview-image" />
          </td>
        </tr>
        <tr>
          <td>Umur</td>
          <td>{{ formData.umur }}</td>
        </tr>
        <tr>
          <td>Jenis Kelamin</td>
          <td>{{ formData.jenisKelamin }}</td>
        </tr>
        <tr>
          <td>Provinsi</td>
          <td>{{ formData.provinsi }}</td>
        </tr>
        <tr>
          <td>Kabupaten/Kota</td>
          <td>{{ formData.kabupaten }}</td>
        </tr>
        <tr>
          <td>Kecamatan</td>
          <td>{{ formData.kecamatan }}</td>
        </tr>
        <tr>
          <td>Kelurahan/Desa</td>
          <td>{{ formData.kelurahan }}</td>
        </tr>
        <tr>
          <td>Alamat</td>
          <td>{{ formData.alamat }}</td>
        </tr>
        <tr>
          <td>RT</td>
          <td>{{ formData.rt }}</td>
        </tr>
        <tr>
          <td>RW</td>
          <td>{{ formData.rw }}</td>
        </tr>
        <tr>
          <td>Penghasilan Sebelum Pandemi</td>
          <td>{{ formData.penghasilanSebelumPandemi }}</td>
        </tr>
        <tr>
          <td>Penghasilan Setelah Pandemi</td>
          <td>{{ formData.penghasilanSetelahPandemi }}</td>
        </tr>
        <tr>
          <td>Alasan Membutuhkan Bantuan</td>
          <td>{{ formData.alasanMembutuhkan }}<span v-if="formData.alasanMembutuhkan === 'Lainnya'">: {{ formData.alasanLainnya }}</span></td>
        </tr>
      </tbody>
    </table>
    <button @click="goBack">Kembali ke Form</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: JSON.parse(localStorage.getItem('formData')) || {}
    };
  },
  methods: {
    goBack() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.preview-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

thead {
  background-color: #f4f4f4;
}

th, td {
  padding: 0.8rem;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}

.preview-image {
  max-width: 150px;
  max-height: 100px;
}

button {
  width: 100%;
  padding: 0.8rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
}

button:hover {
  background-color: #45a049;
}
</style>
