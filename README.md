# free-scheduler

A scheduler component built for React.

<a href="https://kotovaz.github.io/free-scheduler/index.html">Demo page</a>

![image](https://user-images.githubusercontent.com/31381189/176608267-1d9506a9-9f3f-4b12-874a-dbd6f775496a.png)

Example of usage:
```javascript
ReactDOM.render(<Scheduler
  config={{
    start: new Date('2020-01-09 00:00:00'), 
    end: new Date('2020-01-13 23:59:59'),
    interval: 3600000,
    resource: {
      width: 200,
      title: 'Пользователи'
    },
    parent: root,
    adaptiveColumnWidth: true,
    dateFormat: "DD.MM HH:mm",
    byWorkTime: true,
    showDayName: true
  }}
  resources={demoData.resources}
  events={demoData.events}
/>, document.getElementById('root'));
```
<a href="https://kotovaz.github.io/free-scheduler/src/demoData.js">Demo data</>

