
// sidebar menu

document.querySelectorAll('.sidebar-submenu').forEach(e => {
  e.querySelector('.sidebar-menu-dropdown').onclick = (event) => {
      event.preventDefault()
      e.querySelector('.sidebar-menu-dropdown .dropdown-icon').classList.toggle('active')

      let dropdown_content = e.querySelector('.sidebar-menu-dropdown-content')
      let dropdown_content_lis = dropdown_content.querySelectorAll('li')

      let active_height = dropdown_content_lis[0].clientHeight * dropdown_content_lis.length

      dropdown_content.classList.toggle('active')

      dropdown_content.style.height = dropdown_content.classList.contains('active') ? active_height + 'px' : '0'
  }
})



// chart

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ['ديسمبر', 'نوفمبر','أكتوبر', 'سبتمبر', 'أغسطس', ' يوليو', ' يونيو', ' مايو', 'ابريل', 'مارس', 'فبراير', 'يناير'],
    datasets: [{
        label: 'الاباء',
      data: [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600],
      backgroundColor: ['#122D4D'],
      borderRadius: 8,
      grouped: false,
    },
    {
        label:'الطلاب',
        data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
        backgroundColor: ['#FF8C38'],
        borderRadius: 8,
    }]
  },
  options: {
    plugins: {
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: false
          }
        },
        // x: {
        //   grid: {
        //     display: false
        //   }
        // }
      },
      legend: {
        labels: {
          boxWidth: 20,
          boxHeight: 20,
          // usePointStyle: true,
          // pointStyle: 'rectRounded',
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});




