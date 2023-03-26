def swap(array, index1, index2):
    # Store the value at index1 in a variable
    store = array[index1]
    
    # Swap the values at index1 and index2
    array[index1] = array[index2]
    array[index2] = store
    
    # Return the modified array
    return array