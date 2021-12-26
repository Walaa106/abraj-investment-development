import * as React from "react"
import Layout from '../components/layout'

export default function Example() {
    return <Layout>
        <div display='flex' textAlign='center' flexDirection='row' w='full' alignContent='center' justifyContent='center'>
            <h3 display='flex' alignItems='center' color='secondary' ml='24'> This page is under construction</h3>
            <img src="/images/under-construction.png" w='300' mt='45'/>
        </div>
    </Layout>
}