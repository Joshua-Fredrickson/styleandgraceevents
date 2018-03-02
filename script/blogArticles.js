'use stict';

let rawData = [
    {
      title:       'Tactical Flashlight Review',
      category:    'Camping',
      author:      'Lacey Fredrickson',
      urlLink:   'https://www.amazon.com/review/RPM8PHI65BIBF/ref=cm_cr_srp_d_rdp_perm?ie=UTF8',
      publishedOn: '2018-02-25',
      body:        '<p>The newest addition to our family’s camping collection, I ordered this just in time for our latest camping trip. I’ve never seen such a powerful flashlight, and it comes with a rechargeable battery and battery charger. The problem is our 14 year old seems to have dibs on this flashlight, so I might not get to use is as intended. I’m now ordering headlamps for each of us. </p><p><a href="https://www.amazon.com/review/RPM8PHI65BIBF/ref=cm_cr_srp_d_rdp_perm?ie=UTF8" target="_blank" > <em>Read my full flashlight review here</em></a></p>'
    },
    {
      title:       'Really affordable Sonicare Toothbrush Review',
      category:    'Toothbrush',
      author:      'Lacey Fredrickson',
      urlLink:   'https://www.amazon.com/review/R6HLNKEM1WZEF/ref=cm_cr_srp_d_rdp_perm?ie=UTF8',
      publishedOn: '2018-02-23',
      body:        '<p>Hey guys, I think my Sonicare Diamond is going out. I saw a DEAL for a new Sonicare. I bought it, had it gifted to me for Christmas. To my amazement, it cleans my teeth as well as the Sonicare Diamond, at one-seventh of the price! </p><p>   <a href="https://www.amazon.com/review/R6HLNKEM1WZEF/ref=cm_cr_srp_d_rdp_perm?ie=UTF8" target="_blank" > <em>Read my full review here</em> </a></p>'
    },
    {
      title:       'Black and White Buffalo Check Flannel for Me',
      category:    'Fashion',
      author:      'Lacey Fredrickson',
      urlLink:   'https://www.amazon.com/review/R3BJ3BPDMG74N4/ref=cm_cr_srp_d_rdp_perm?ie=UTF8',
      publishedOn: '2018-02-23',
      body:        '<p>I saw this flannel on What Kristin Found, and I wanted one to re-create her outfit. I ordered a bit large, but it was so impressive and warm, it’s one of m new favorite items. </p><p><a href="https://www.amazon.com/review/R3BJ3BPDMG74N4/ref=cm_cr_srp_d_rdp_perm?ie=UTF8" target="_blank" ><em>Read my full review here</em> </a></p>'
    },
    {
      title:       'That Babyproofing Life',
      category:    'Baby',
      author:      'Lacey Fredrickson',
      urlLink:   'https://www.amazon.com/review/R3BRD0WLY66OHA/ref=cm_cr_srp_d_rdp_perm?ie=UTF8',
      publishedOn: '2018-02-21',
      body:        '<p>OWith an active 9 month old, it was time to keep him out of the cupboard. Particularly because he was opening drawers and doors, flinging items around the kitchen. The first baby proofing set we got from my mother-in-law didn’t work, because our cupboards wouldn’t fit the latch. Someone suggested magnetic locks, but the first set we got from our neighborhood Buy Nothing required the locks to be screwed in. We resorted to buying magnetic locks on Amazon and only regret waiting. </p><p><a href="https://www.amazon.com/review/R3BRD0WLY66OHA/ref=cm_cr_srp_d_rdp_perm?ie=UTF8" target="_blank" ><em>Read my full review here</em></a></p>'
    },
    {
      title:       'Baby Aston Comes Home',
      category:    'Baby',
      author:      'Lacey Fredrickson',
      urlLink:   '',
      publishedOn: '2017-05-30',
      body:        '<p>We brought our sweet baby Aston home, and realized how much we needed. Commence buying all the things for baby, including cloth diapers on Amazon, the best value.</p>'
    },
    {
      title:       'Spring Break in Sunny California',
      category:    'Family',
      author:      'Lacey Fredrickson',
      urlLink:   '',
      publishedOn: '2017-04-15',
      body:        '<p>We spent the children’s spring break and Easter in sunny Southern California.</p>'
    },
    {
      title:       'Babymoon',
      category:    'Baby',
      author:      'Lacey Fredrickson',
      urlLink:   '',
      publishedOn: '2017-02-27',
      body:        '<p>Husband and I took one last getaway as a couple before our lives changed forever. We went to sunny Phoenix to watch our beloved Seattle Mariner’s in Spring Training while we soaked up all the Vitamin D from the sunshine we hadn’t seen in months.</p>'
    },
    {
      title:       'Baby Registry',
      category:    'Baby',
      author:      'Lacey Fredrickson',
      urlLink:   '',
      publishedOn: '2017-01-14',
      body:        '<p>10 months after our wedding, we were expecting a new bundle of joy. Our friends wanted to shower us with love and presents, so we again registered on Amazon. The benefits were amazing that we got samples in the mail galore. I realized that it was Amazon selling our info to baby companies because my Amazon account was the only place I’d forgotten to update to my new last name.</p>'
    },
    {
      title:       'Christmas',
      category:    'Christmas',
      author:      'Lacey Fredrickson',
      urlLink:   '',
      publishedOn: '2016-12-25',
      body:        '<p>We introduced our 13 year old to Christmas wish lists, an updated Christmas list for him to share with the extended family. He quickly caught onto how to rank and add his notes to each item on the wishlist. The problem is, he would change the items on the wishlist nearly daily, so we weren’t sure if we purchased an item, if he would still want it by Christmas. Prime shipping saved Christmas.</p>'
    },
    {
    title:       'Familymoon',
    category:    'Wedding',
    author:      'Lacey Fredrickson',
    urlLink:   '',
    publishedOn: '2016-08-20',
    body:        '<p>OWe had the opportunity to go take a Family Honeymoon as a new family, to take the children to Southern California, warm beaches, and Disneyland for the children’s first time.</p>'
     },
     {
      title:       'Honeymoon',
      category:    'Wedding',
      author:      'Lacey Fredrickson',
      urlLink:   '',
      publishedOn: '2016-07-12',
      body:        '<p>Our honeymoon in Bali typified the adventure and easy-goingness that we love about spending time together</p>'
    }, 
    {
      title:       'Wedding Day',
      category:    'Wedding',
      author:      'Lacey Fredrickson',
      urlLink:   '',
      publishedOn: '2016-07-04',
      body:        '<p>I married my sweet husband. We had the fairytale wedding of my dreams, that reflected our fairytale relationship. I became an instamom to a 13 year old son and 5 year old daughter.</p>'
    },
    {
      title:       'Wedding Prep and Wedding Registry',
      category:    'Wedding',
      author:      'Lacey Fredrickson',
      urlLink:   '',
      publishedOn: '2016-05-10',
      body:        '<p>In preparation of our wedding, I began ordering everything needed for a wedding on Amazon and had it delivered to my office, where I could judge the item to determine if it was suitable to reflect our fairytale theme, or not. I also registered our wedding on Amazon, which was amazing to get everything I loved, delivered to our doorstep.</p>'
    },
  ]