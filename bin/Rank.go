package main

import (
    "fmt"
    "sort"
)

func rank(a []int) {
    toSort := a
    sort.Ints(toSort)
    winner=toSort[0]
    return winner
}
