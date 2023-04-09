                //try
export const usePaprobath=()=>{
    const name=ref('yotsusan_machi')
    const hobby=ref('coding maybe')
    const banners=ref(['TSR','TSV','LRV','ODV','LDV'])
    let loading=ref(false)

    onMounted(()=>{
        loading.value=true
    })

    return {
        name,
        hobby,
        banners,
        loading,
    }
}