function pushList(num_list, list) {
    let b = num_list.push(list);
    return num_list
}

function solution(num_list) {
    let a = num_list.length - 1;
    
    if(num_list[a] > num_list[a-1])
        pushList(num_list, num_list[a] - num_list[a-1])
    else
        pushList(num_list, num_list[a] * 2)
    return num_list
}