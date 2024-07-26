
// sidebar menu

document.querySelectorAll('.sidebar-submenu').forEach(e => {
  e.querySelector('.sidebar-menu-dropdown').onclick = (event) => {
      event.preventDefault()
      e.querySelector('.sidebar-menu-dropdown .dropdown-icon').classList.toggle('active')

      let dropdown_content = e.querySelector('.sidebar-menu-dropdown-content')
      let dropdown_content_lis = dropdown_content.querySelectorAll('li')

      let active_height = (dropdown_content_lis[0].clientHeight * dropdown_content_lis.length) + 30

      dropdown_content.classList.toggle('active')

      dropdown_content.style.height = dropdown_content.classList.contains('active') ? active_height + 'px' : '0'
  }
})


//////////////////////// add new input //////////////////////////

let counter = 1;

function addInput() {
    
    let inputGroup = document.createElement('div');
    inputGroup.id = `inputGroup${counter}`;
    inputGroup.className = 'change-direction d-flex mb-3';

   
    let label = document.createElement('label');
    label.textContent = `الفصل ${counter} `;
    
    
    let input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control';
    input.name = `input${counter}`;

  
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-regular fa-trash-can fa-lg mr-0"></i>';
    deleteButton.className = 'main-btn-delete text-center';
    deleteButton.onclick = function() {
        deleteInput(inputGroup.id);
    };
    
 
    inputGroup.appendChild(label);
    inputGroup.appendChild(input);
    inputGroup.appendChild(deleteButton);
    
    
    let container = document.getElementById('inputContainer');
    container.appendChild(inputGroup);
    
    counter++;
}

function deleteInput(id) {

    let inputGroup = document.getElementById(id);
    inputGroup.remove();

}

/////////////////////////////////////////////////////////////////////////

// chart

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['ديسمبر', 'نوفمبر', 'أكتوبر', 'سبتمبر', 'أغسطس', 'يوليو', 'يونيو', 'مايو', 'ابريل', 'مارس', 'فبراير', 'يناير'],
        datasets: [{
            label: 'الاباء',
            data: [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600],
            backgroundColor: ['#122D4D'],
            borderRadius: 8,
            grouped: false,
        },
        {
            label: 'الطلاب',
            data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
            backgroundColor: ['#FF8C38'],
            borderRadius: 8,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    boxWidth: 20,
                    boxHeight: 20,
                    font: {
                        family: 'Noto Kufi Arabic'
                    }
                }
            },
            tooltip: {
                bodyFont: {
                    family: 'Noto Kufi Arabic'
                },
                titleFont: {
                    family: 'Noto Kufi Arabic'
                },
                footerFont: {
                    family: 'Noto Kufi Arabic'
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        family: 'Noto Kufi Arabic'
                    }
                }
            },
            x: {
                ticks: {
                    font: {
                        family: 'Noto Kufi Arabic'
                    }
                }
            }
        }
    }
});





