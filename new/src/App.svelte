<script>
    import Old from './lib/Old.svelte';
  import Home from './routes/Home.svelte';
  import {Router} from 'dug-svelte-router'
    import ReactPrereq from './routes/ReactPrereq.svelte';
</script>

<header>
  <div id="logo">
    Doug's webdev resources
  </div>
  <nav>
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#">Home</a>
  </nav>
</header>

<main>
  <Router routes={[
    {
      component: Home
    },
    {
      hash: 'layout:#old',
      component: Old,
      destroy: true
    },
    {
      hash: '#react-prereq',
      component: ReactPrereq
    }
  ]}/>
</main>