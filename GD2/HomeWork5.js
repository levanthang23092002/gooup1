const events = [
    { id: 1, name: 'Conference', date: new Date('2023-12-01T09:00:00') },
    { id: 2, name: 'Workshop', date: new Date('2023-12-10T14:30:00') },
    { id: 3, name: 'Meeting', date: new Date('2023-11-20T11:45:00') },
    { id: 3, name: 'Solve rubik', date: new Date('2023-11-29T11:45:00') },
    { id: 3, name: 'Buy new phone', date: new Date('2023-11-30T11:45:00') },
    { id: 3, name: 'Eating', date: new Date('2023-12-20T11:45:00') },
    { id: 3, name: 'Walking', date: new Date('2023-12-20T11:45:00') },
    { id: 3, name: 'Runing', date: new Date('2025-12-20T12:45:00') },
    { id: 3, name: 'Checking Bug', date: new Date('2025-12-20T12:46:00') },
    { id: 3, name: 'Deploy Production', date: new Date('2025-12-20T12:47:00') },
];

const result = [
    { id: 3, name: 'Solve rubik', date: 2023-11-29, remainingDate: '1 day' },
    { id: 3, name: 'Buy new phone', date: 2023-11-30, remainingDate: '2 days' },
]

// sort event before to after 
const sortEvents = events.sort((eventA ,eventb)=> Number(eventA.date) - Number(eventb.date));
// console.log(sortEvents);

// find one day input "DD-MM-YYYY" output all event in that day

function formatDate(dateString) {
    const format= "DD-MM-YYYY"

    const day = dateString.getDate();
    const month = dateString.getMonth() + 1; 
    const year = dateString.getFullYear();

    let formattedDate = format.replace("DD", padNumber(day));
    formattedDate = formattedDate.replace("MM", padNumber(month));
    formattedDate = formattedDate.replace("YYYY", year);
    
    return formattedDate;
  }
  
  function padNumber(number) {
    return number.toString().padStart(2, '0');
  }

function getdate(events, a) {
    let eventDate = [];
    events.forEach(element => {
            if(a === formatDate(element.date)){
                eventDate.push(element)
            }
    });
    return eventDate;
  }
  
//   console.log(getdate(events, "20-12-2023"));
//request 3


function convertDate(a){
    const element =a.split("-");
    
    const day = element[0];
    const month = element[1];
    const year = element[2] 
    const date = `${year}-${padNumber(month)}-${padNumber(day)}`;
    
    const convertdate = new Date(date);
    return convertdate;
}


  function comParedate(events, a) {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 
    const year = currentDate.getFullYear();
    
    const date = `${year}-${padNumber(month)}-${padNumber(day)}`;
    const dateCurrent = new Date(date);

    const dateInput = convertDate(a);

    
    let listEvents = [];
    if(dateInput > dateCurrent){
         
        events.forEach((element)=>{
            
            if(element.date <= dateInput && element.date >= dateCurrent){ 
                let formatdate = formatDate(element.date)
                let time = Math.round((element.date - dateCurrent)/ (24*60*60*1000));
                listEvents.push({id: element.id, name: element.name, date: formatdate,remainingDate: time + ' days'  })
            }
        })
    }else{
            
        events.forEach((element)=>{
            
            if(element.date >= dateInput && element.date < dateCurrent){
                let formatdate = formatDate(element.date)
                let time = Math.round((dateCurrent - element.date)/ (24*60*60*1000));
                listEvents.push({id: element.id, name: element.name, date: formatdate,passedDay: time + ' days'  })
            }
        })
        
    }
   return listEvents;
  }

console.log(comParedate(events,"11-10-2023"))