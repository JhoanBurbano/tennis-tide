import React from 'react'
interface TemplateProps {
    children: React.ReactNode
}

function Template({children}: TemplateProps): React.ReactNode {
  return (
    <div className=' flex items-center justify-center' style={{width: '100vw', height: '100vh'}}>
        {
            children
        }
    </div>
  )
}

export default Template