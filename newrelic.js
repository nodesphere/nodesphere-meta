/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  /**
   * Array of application names.
   */
  app_name : ['nodesphere-meta'],
  /**
   * Your New Relic license key.
   */
  license_key : '2e838399ec31a7d9b9b1ec12bf6c50fc1565d90c',
  logging : {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level : 'warn'  // fatal, error, warn, info, debug, or trace
  }
};
