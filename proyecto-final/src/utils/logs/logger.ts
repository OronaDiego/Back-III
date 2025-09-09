import  Log4js  from "log4js";
Log4js.configure({
    appenders:{
        fileAppender: {type:'file', filename:'./src/utils/logs/logs.log'},
        consoleAppender:{type:'console'}
    },
    categories: {
        default: { appenders: [ 'fileAppender','consoleAppender'], level:'info'},
    }
});

export const logger = Log4js.getLogger();