import { HebrewCalendar, HDate, Location, Event, Zmanim } from '@hebcal/core';
import {  weekDays } from './export2.js';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')


let arr = [];

let today = new HDate().onOrBefore(0)
let now = new HDate()
for (let index = 0; index < 7; index++) {


    let ran = today.render('en')
    
    let  zmanim = new Zmanim(Location.lookup("New York"),today)
    let ksh = zmanim.sofZmanShmaMGA().toLocaleTimeString()
    let tfl = zmanim.sofZmanTfilla().toLocaleTimeString()
    if (today.dd === now.dd ){
        ksh = timeAgo.format(zmanim.sofZmanShmaMGA())
        tfl = timeAgo.format(zmanim.sofZmanTfilla())
    }
    

     let object = {
        weekDay :weekDays(index),
        monthDay:ran,
        shma: ksh,
        tefila: tfl  
    }
    arr.push(object)
    today = today.add(1)
}
console.table(arr)


