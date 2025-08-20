export const TEST_USER = {
  email: 'test@velocilogic.com',
  password: 'testuser123',
  fullName: 'Test User',
};

export const SAMPLE_PROJECTS: any[] = [
  {
    name: 'Acme Bakery',
    description:
      'A cozy neighborhood bakery specializing in artisan breads and pastries',
    is_published: true,
    pages: [
      {
        id: 'page-1',
        components: [
          {
            id: 'hero-1',
            type: 'hero',
            props: {
              title: 'Fresh Artisan Breads Daily',
              subtitle:
                'Experience the finest handcrafted breads and pastries, baked with love using traditional methods and premium ingredients.',
              ctaText: 'Order Online',
              backgroundImage:
                'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
            },
            position: { x: 0, y: 0, width: 100, height: 60 },
            style: {
              backgroundColor: '#8b4513',
              textColor: '#ffffff',
              fontSize: '3rem',
              fontWeight: 'bold',
              padding: '4rem 2rem',
            },
          },
          {
            id: 'features-1',
            type: 'features',
            props: {
              title: 'Why Choose Acme Bakery',
              features: [
                {
                  title: 'Fresh Daily',
                  description:
                    'All breads and pastries baked fresh every morning',
                },
                {
                  title: 'Premium Ingredients',
                  description:
                    'Only the finest organic flour and natural ingredients',
                },
                {
                  title: 'Traditional Methods',
                  description:
                    'Time-honored baking techniques passed down generations',
                },
              ],
            },
            position: { x: 0, y: 60, width: 100, height: 40 },
            style: {
              backgroundColor: '#f8fafc',
              padding: '4rem 2rem',
            },
          },
        ],
        updated_at: new Date().toISOString(),
      },
    ],
    settings: {
      theme: {
        primaryColor: '#8b4513',
        secondaryColor: '#d2691e',
        fontFamily: 'Georgia',
        borderRadius: '8px',
      },
      seo: {
        siteName: 'Acme Bakery',
        defaultTitle: 'Acme Bakery - Fresh Artisan Breads',
        defaultDescription:
          'Premium artisan bakery with fresh breads and pastries',
      },
      analytics: {},
    },
  },
  {
    name: 'TechStart Solutions',
    description: 'Innovative software solutions for modern businesses',
    is_published: false,
    pages: [
      {
        id: 'page-2',
        components: [
          {
            id: 'hero-2',
            type: 'hero',
            props: {
              title: 'Innovation at Your Fingertips',
              subtitle:
                'Transform your business with cutting-edge software solutions designed for the modern enterprise.',
              ctaText: 'Get Started',
              backgroundImage:
                'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
            },
            position: { x: 0, y: 0, width: 100, height: 60 },
            style: {
              backgroundColor: '#3b82f6',
              textColor: '#ffffff',
              fontSize: '3rem',
              fontWeight: 'bold',
              padding: '4rem 2rem',
            },
          },
        ],
        updated_at: new Date().toISOString(),
      },
    ],
    settings: {
      theme: {
        primaryColor: '#3b82f6',
        secondaryColor: '#1e40af',
        fontFamily: 'Inter',
        borderRadius: '8px',
      },
      seo: {
        siteName: 'TechStart Solutions',
        defaultTitle: 'TechStart Solutions - Software Innovation',
        defaultDescription:
          'Cutting-edge software solutions for modern businesses',
      },
      analytics: {},
    },
  },
  {
    name: 'Green Garden Landscaping',
    description:
      'Professional landscaping services for residential and commercial properties',
    is_published: true,
    pages: [
      {
        id: 'page-3',
        components: [
          {
            id: 'hero-3',
            type: 'hero',
            props: {
              title: 'Transform Your Outdoor Space',
              subtitle:
                'Professional landscaping services to create beautiful, sustainable outdoor spaces that enhance your property value.',
              ctaText: 'Free Consultation',
              backgroundImage:
                'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg',
            },
            position: { x: 0, y: 0, width: 100, height: 60 },
            style: {
              backgroundColor: '#10b981',
              textColor: '#ffffff',
              fontSize: '3rem',
              fontWeight: 'bold',
              padding: '4rem 2rem',
            },
          },
        ],
        updated_at: new Date().toISOString(),
      },
    ],
    settings: {
      theme: {
        primaryColor: '#10b981',
        secondaryColor: '#059669',
        fontFamily: 'Poppins',
        borderRadius: '12px',
      },
      seo: {
        siteName: 'Green Garden Landscaping',
        defaultTitle: 'Green Garden Landscaping - Professional Services',
        defaultDescription:
          'Transform your outdoor space with professional landscaping',
      },
      analytics: {},
    },
  },
];

export const setupTestEnvironment = async () => {
  try {
    console.log('Setting up test environment...');

    // Create or sign in test user
    // const userResult = await createTestUser();

    // if (!userResult.success) {
    //   console.error('Failed to create/sign in test user:', userResult.error);
    //   throw new Error(`Failed to create test user: ${userResult.error?.message || 'Unknown error'}`);
    // }

    // const user = userResult.data?.user;
    // if (!user) {
    //   throw new Error('No user data returned');
    // }

    // console.log('Test user ready:', user.email);

    // Create sample projects
    const projectsResult = SAMPLE_PROJECTS;

    if (!projectsResult) {
      console.warn('Failed to create sample projects, but user is ready:');
    }

    console.log('Test environment setup complete!');
    return {
      success: true,
      user: {},
      projects: projectsResult || [],
    };
  } catch (error) {
    console.error('Failed to setup test environment:', error);
    return { success: false, error };
  }
};
