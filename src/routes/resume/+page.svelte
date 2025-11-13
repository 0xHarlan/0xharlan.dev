<script>
  import { t } from '$lib/utils';
</script>

<h1>{$t('resume.title')}</h1>

<section class="resume-section">
  <h2 class="section-heading">{$t('resume.professional')}</h2>

  <div class="workplace-item">
    <h3 class="workplace-title">
      {$t('resume.work.courier.title')} at <a href="https://example.com" class="company-link">{$t('resume.work.courier.company')}</a>
    </h3>
    <p class="workplace-meta">
      <span class="nowrap">{$t('resume.work.courier.dates')}</span>
      <span class="separator">•</span>
      <span class="nowrap">{$t('resume.work.courier.location')}</span>
    </p>
    <ul class="workplace-details">
      {#each $t('resume.work.courier.description') as item}
        <li>{item}</li>
      {/each}
    </ul>
  </div>

  <div class="workplace-item">
    <h3 class="workplace-title">
      {$t('resume.work.intern.title')} at <a href="https://example.com" class="company-link">{$t('resume.work.intern.company')}</a>
    </h3>
    <p class="workplace-meta">
      <span class="nowrap">{$t('resume.work.intern.dates')}</span>
      <span class="separator">•</span>
      <span class="nowrap">{$t('resume.work.intern.location')}</span>
    </p>
    <ul class="workplace-details">
      {#each $t('resume.work.intern.description') as item}
        <li>{item}</li>
      {/each}
    </ul>
  </div>
</section>

<section class="resume-section">
  <h2 class="section-heading">{$t('resume.education')}</h2>

  <div class="education-item">
    <div class="education-header">
      <h3 class="institution">{$t('resume.education.master.institution')}</h3>
      <div class="dates">{$t('resume.education.master.dates')}</div>
    </div>
    <p class="degree">{$t('resume.education.master.degree')}</p>
    
    <h4 class="subsection-title">{$t('resume.coursework')}</h4>
    <ul>
      {#each $t('resume.education.master.coursework') as course}
        <li>{course}</li>
      {/each}
    </ul>
  </div>

  <div class="education-item">
    <div class="education-header">
      <h3 class="institution">{$t('resume.education.bachelor.institution')}</h3>
      <div class="dates">{$t('resume.education.bachelor.dates')}</div>
    </div>
    <p class="degree">{$t('resume.education.bachelor.degree')}</p>
    
    <h4 class="subsection-title">{$t('resume.coursework')}</h4>
    <ul>
      {#each $t('resume.education.bachelor.coursework') as course}
        <li>{course}</li>
      {/each}
    </ul>
  </div>

  <div class="education-item">
    <div class="education-header">
      <h3 class="institution">{@html $t('resume.education.highschool.institution')}</h3>
      <div class="dates">{$t('resume.education.highschool.dates')}</div>
    </div>
    <p class="degree">{$t('resume.education.highschool.degree')}</p>
    <ul>
      {#each $t('resume.education.highschool.details') as detail}
        <li>{detail}</li>
      {/each}
    </ul>
  </div>
</section>

<section class="resume-section">
  <h2 class="section-heading">{$t('resume.projects')}</h2>

  <div class="project-item">
    <div class="project-header">
      <h3 class="project-title">{$t('resume.projectsList.cibo.name')}</h3>
      <div class="project-tech">{$t('resume.projectsList.cibo.tech')}</div>
      <div class="dates">{$t('resume.projectsList.cibo.dates')}</div>
    </div>
    <ul>
      {#each $t('resume.projectsList.cibo.description') as item}
        <li>{item}</li>
      {/each}
    </ul>
  </div>

  <div class="project-item">
    <div class="project-header">
      <h3 class="project-title">{$t('resume.projectsList.isotrop.name')}</h3>
      <div class="project-tech">{$t('resume.projectsList.isotrop.tech')}</div>
      <div class="dates">{$t('resume.projectsList.isotrop.dates')}</div>
    </div>
    <ul>
      {#each $t('resume.projectsList.isotrop.description') as item}
        <li>{item}</li>
      {/each}
    </ul>
  </div>

  <div class="project-item">
    <div class="project-header">
      <h3 class="project-title">{$t('resume.projectsList.scheduling.name')}</h3>
      <div class="project-tech">{$t('resume.projectsList.scheduling.tech')}</div>
      <div class="dates">{$t('resume.projectsList.scheduling.dates')}</div>
    </div>
    <ul>
      {#each $t('resume.projectsList.scheduling.description') as item}
        <li>{item}</li>
      {/each}
    </ul>
  </div>
</section>

<section class="resume-section">
  <h2 class="section-heading">{$t('resume.skills')}</h2>

  <div class="skills-category">
    <h4 class="subsection-title">{$t('resume.skillsCategories.languages.title')}</h4>
    <p>{$t('resume.skillsCategories.languages.content')}</p>
  </div>

  <div class="skills-category">
    <h4 class="subsection-title">{$t('resume.skillsCategories.frameworks.title')}</h4>
    <p>{$t('resume.skillsCategories.frameworks.content')}</p>
  </div>

  <div class="skills-category">
    <h4 class="subsection-title">{$t('resume.skillsCategories.databases.title')}</h4>
    <p>{$t('resume.skillsCategories.databases.content')}</p>
  </div>

  <div class="skills-category">
    <h4 class="subsection-title">{$t('resume.skillsCategories.devops.title')}</h4>
    <p>{$t('resume.skillsCategories.devops.content')}</p>
  </div>

  <div class="skills-category">
    <h4 class="subsection-title">{$t('resume.skillsCategories.spokenLanguages.title')}</h4>
    <p>{$t('resume.skillsCategories.spokenLanguages.content')}</p>
  </div>
</section>

<section class="resume-section">
  <h2 class="section-heading">{$t('resume.volunteer')}</h2>

  <div class="volunteer-item">
    <h3 class="subsection-title">{$t('resume.volunteerWork.title')}</h3>
    <ul>
      {#each $t('resume.volunteerWork.items') as item}
        <li>
          <b>{item.name}:</b> {item.description}
        </li>
      {/each}
    </ul>
  </div>
</section>