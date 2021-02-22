import { useCallback, useMemo } from "react";

useCallback(()=>{
    console.log('hello useCallback');
},[]);

useMemo(()=>{
    const fn = ()=>{
        console.log('hello useMemo');
    };
    return fn;
},[]);