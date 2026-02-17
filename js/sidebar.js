(function () {
  // Detect depth: are we in a subdirectory?
  var scripts = document.getElementsByTagName('script');
  var src = '';
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].src && scripts[i].src.indexOf('sidebar.js') !== -1) {
      src = scripts[i].getAttribute('src');
      break;
    }
  }
  var prefix = src.indexOf('../') === 0 ? '../' : '';

  // Current page filename
  var path = window.location.pathname;
  var currentPage = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  // For subdirectory pages, include the folder
  var segments = path.split('/');
  var currentKey = '';
  if (segments.length >= 2) {
    var folder = segments[segments.length - 2];
    if (folder === 'frameworks' || folder === 'case-studies' || folder === 'code' || folder === 'resources') {
      currentKey = folder + '/' + currentPage;
    } else {
      currentKey = currentPage;
    }
  } else {
    currentKey = currentPage;
  }

  var sections = [
    {
      title: 'Foundations',
      links: [
        { href: 'why-evals-matter.html', label: '0. Why Evals Exist' },
        { href: 'what-are-evals.html', label: '1. What Evals Are' }
      ]
    },
    {
      title: 'Scoping',
      links: [
        { href: 'ecosystem.html', label: '2. Where Failure Emerges' },
        { href: 'frameworks/governance.html', label: '3. Risk-First Scoping' }
      ]
    },
    {
      title: 'Eval Design',
      links: [
        { href: 'frameworks/rag-evaluation.html', label: '4a. RAG Evals' },
        { href: 'frameworks/llm-as-judge.html', label: '4b. LLM-as-Judge' },
        { href: 'frameworks/human-in-the-loop.html', label: '4c. Agents & HITL' },
        { href: 'eval-data-baselines.html', label: '5. Data & Baselines' }
      ]
    },
    {
      title: 'Operating',
      links: [
        { href: 'interpreting-results.html', label: '6. Reading Results' },
        { href: 'frameworks/drift-monitoring.html', label: '6a. Drift Monitoring' },
        { href: 'kpi-dashboard.html', label: '7. Evals as Product' },
        { href: 'best-practices.html', label: '8. Making Evals Real' }
      ]
    },
    {
      title: 'Case Studies',
      links: [
        { href: 'case-studies/query-drift-rag.html', label: 'Query Drift' },
        { href: 'case-studies/hallucination-reduction.html', label: 'Hallucination Reduction' },
        { href: 'case-studies/embedding-drift.html', label: 'Embedding Drift' }
      ]
    },
    {
      title: 'Code Examples',
      links: [
        { href: 'code/eval_pipeline.html', label: 'Eval Pipeline' },
        { href: 'code/consequence_scorer.html', label: 'Scorers' },
        { href: 'code/rag_evaluator.html', label: 'RAG Evaluator' },
        { href: 'code/confidence_calibrator.html', label: 'Calibrator' }
      ]
    },
    {
      title: 'Resources & Tools',
      links: [
        { href: 'resources.html', label: 'Overview' },
        { href: 'resources/eval-readiness-checklist.html', label: 'Readiness Checklist' },
        { href: 'resources/golden-set-template.html', label: 'Golden Set Template' },
        { href: 'resources/llm-judge-rubric.html', label: 'LLM Judge Rubric' },
        { href: 'resources/eval-maturity-model.html', label: 'Maturity Assessment' },
        { href: 'resources/weekly-eval-report.html', label: 'Weekly Report' },
        { href: 'resources/consequence-scoring-worksheet.html', label: 'Consequence Scoring' },
        { href: 'resources/prompt-engineering-cheatsheet.html', label: 'Prompt Engineering' },
        { href: 'resources/eval-roi-calculator.html', label: 'ROI Calculator' },
        { href: 'resources/vendor-comparison.html', label: 'Vendor Comparison' }
      ]
    },
    {
      title: 'Reference',
      links: [
        { href: 'glossary.html', label: 'Glossary' },
        { href: 'faq.html', label: 'FAQ' }
      ]
    }
  ];

  function isActive(href) {
    return currentKey === href;
  }

  function buildLink(link) {
    var a = document.createElement('a');
    a.href = prefix + link.href;
    a.className = 'sidebar-link' + (isActive(link.href) ? ' active' : '');
    a.textContent = link.label;
    return a;
  }

  var sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  sections.forEach(function (section) {
    var group = document.createElement('div');
    group.className = 'sidebar-group';

    var title = document.createElement('div');
    title.className = 'sidebar-title';
    title.textContent = section.title;
    group.appendChild(title);

    if (section.links) {
      section.links.forEach(function (link) {
        group.appendChild(buildLink(link));
      });
    }

    sidebar.appendChild(group);
  });
})();
