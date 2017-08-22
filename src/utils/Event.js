function Event() {
    let eventMap = {};
    let id = 0;

    this.subscribe = function(name, handler) {
        if(!eventMap.hasOwnProperty(name)) {
            eventMap[name] = [];
        }
        let eventObj = {
            id: id++,
            name,
            handler
        };
        eventMap[name].push(eventObj);
        return eventObj;
    }

    this.unsubscribe = function(eventObj) {
        if(!eventObj.hasOwnProperty('id') || !eventObj.hasOwnProperty('handler') || !eventObj.hasOwnProperty('name')) {
            return 'argument must be a return value from subscribe method';
        }
        eventMap[eventObj.name] = eventMap[eventObj.name].filter(item => {
            return item.id !== eventObj.id;
        });
    }

    // 不指定接收参数个数 第一个参数为事件名称，后面为数据
    this.publish = function() {
        let name = [].shift.call(arguments);
        if(!eventMap.hasOwnProperty(name)) {
            return console.log('event not found');
        }
        eventMap[name].forEach(eventObj => {
            eventObj && eventObj.handler.apply(eventObj, arguments);
        });
    }
}

export default new Event();