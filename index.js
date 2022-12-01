fetch('iris.json')
.then(result => result.json())
.then(irisData => {
    let setosaData = irisData.slice(0,50);
    let setosaPetalWidthAvg = 0;
    for (const iris of setosaData) {
        setosaPetalWidthAvg += iris["petalWidth"];
    }
    setosaPetalWidthAvg /= 50;

    let versicolorData = irisData.slice(50,100);
    let versicolorPetalWidthAvg = 0;
    for (const iris of versicolorData) {
        versicolorPetalWidthAvg += iris["petalWidth"];
    }
    versicolorPetalWidthAvg /= 50;

    let virginicaData = irisData.slice(100);
    let virginicaPetalWidthAvg = 0;
    for (const iris of virginicaData) {
        virginicaPetalWidthAvg += iris["petalWidth"];
    }
    virginicaPetalWidthAvg /= 50;

    new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
          labels: ['Setosa', 'Versicolor', 'Virginica'],
          datasets: [
            {
              label: "Petal Width (cm)",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
              data: [setosaPetalWidthAvg, versicolorPetalWidthAvg, virginicaPetalWidthAvg]
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          legend: { display: false },
          title: {
            display: true,
            text: 'Iris Petal Width by Species (cm)'
          }
        }
    });
})