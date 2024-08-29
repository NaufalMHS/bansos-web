<template>
    <div class="list-container">
      <h2>Daftar Data Bantuan Sosial</h2>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>NIK</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in dataList" :key="index">
            <td>{{ data.nama }}</td>
            <td>{{ data.nik }}</td>
            <td><button @click="viewDetail(index)">Lihat Detail</button></td>
          </tr>
        </tbody>
      </table>
      <button @click="goBack">Back to Home</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dataList: JSON.parse(localStorage.getItem('dataList')) || []
      };
    },
    methods: {
      viewDetail(index) {
        this.$router.push({ name: 'DetailDataBansos', params: { index } });
      },
      goBack() {
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>
  .list-container {
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
  
  button {
    padding: 0.6rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 1rem;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  button.back-button {
    background-color: #6c757d;
  }
  
  button.back-button:hover {
    background-color: #5a6268;
  }
  </style>
  