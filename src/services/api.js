// src/services/api.js
import axios from 'axios';

export const api = {
  loadProvinsi() {
    return axios.get('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json');
  },
  loadKabupaten(provinsiId) {
    return axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinsiId}.json`);
  },
  loadKecamatan(kabupatenId) {
    return axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${kabupatenId}.json`);
  },
  loadKelurahan(kecamatanId) {
    return axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${kecamatanId}.json`);
  },
  async getProvinsiName(id) {
    try {
      const response = await axios.get('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json');
      const provinsi = response.data.find(prov => prov.id === id);
      return provinsi ? provinsi.name : 'Tidak Diketahui';
    } catch (error) {
      console.error('Error fetching provinsi name:', error);
      return 'Tidak Diketahui';
    }
  },

  async getKabupatenName(id) {
    try {
      const response = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`);
      const kabupaten = response.data.find(kab => kab.id === id);
      return kabupaten ? kabupaten.name : 'Tidak Diketahui';
    } catch (error) {
      console.error('Error fetching kabupaten name:', error);
      return 'Tidak Diketahui';
    }
  },

  async getKecamatanName(id) {
    try {
      const response = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${id}.json`);
      const kecamatan = response.data.find(kec => kec.id === id);
      return kecamatan ? kecamatan.name : 'Tidak Diketahui';
    } catch (error) {
      console.error('Error fetching kecamatan name:', error);
      return 'Tidak Diketahui';
    }
  },

  async getKelurahanName(id) {
    try {
      const response = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${id}.json`);
      const kelurahan = response.data.find(kel => kel.id === id);
      return kelurahan ? kelurahan.name : 'Tidak Diketahui';
    } catch (error) {
      console.error('Error fetching kelurahan name:', error);
      return 'Tidak Diketahui';
    }
  }
};
