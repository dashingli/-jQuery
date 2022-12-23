window.jQuery = function (selectorOrArry){
    let nodeList;
    //判断参数
    if(typeof selectorOrArry === 'string'){
        nodeList = document.querySelectorAll(selectorOrArry);
    }else if(selectorOrArry instanceof Array){
        nodeList = selectorOrArry;
    }

    return {
        find : function (selector){
            let arry = [];
            for(let i = 0;i < nodeList.length;i++){
                const eles = nodeList[i].querySelectorAll(selector);
                for(let j = 0;j <eles.length;j++){
                    arry.push(eles[j]);
                }
            }
            return jQuery(arry);
        },
        addClass : function(className){
            for(let i = 0;i < nodeList.length;i++){
                nodeList[i].classList.add(className);
            }
        }
    }
}

window.$ = window.jQuery;