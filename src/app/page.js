import {Button} from '@nextui-org/button'

export default function Home() {
  return (
    <main>
      hello
      <Button color='primary'>Click me</Button>
      <div className="grid grid-cols-4 gap-4">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
        <div>07</div>
        <div>08</div>
        <div>09</div>
      </div>
      <div className='grid grid-cols-5'>
        <div>01</div>
        <div>01</div>
        <div>01</div>
        <div>01</div>
        <div>01</div>
        <div>01</div>
      </div>
    </main>
  )
}
